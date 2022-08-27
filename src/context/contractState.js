import context from './contractContext';
import { useState } from 'react';
import { shortenAddress } from '../utility/shortenAddress';
import { useEffect } from 'react';
import artifacts from '../artifacts/contracts/Transaction.sol/Transactions.json';

const ethers = require('ethers');


let ContractState = (props) => {
    const [contract, setContract] = useState(null);
    const [account, setAcc] = useState({ address: null, balance: null });
    const [Provider, setProvider] = useState({ provider: null, signer: null });


    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    window.ethereum.on('accountsChanged', async function (accounts) {
        if (Provider.provider) {
            try {
                const _signer = await Provider.provider.getSigner();
                let _accAddress = await _signer.getAddress();
                //_accAddress = shortenAddress(_accAddress);
                let _accBalance = ethers.utils.formatEther(await _signer.getBalance());
                _accBalance = _accBalance.match(/^-?\d+(?:\.\d{0,2})?/)[0];
                setAcc({ address: _accAddress, balance: _accBalance });
                setProvider({ provider: Provider.provider, signer: _signer });
            } catch (error) {
                setAcc({ address: null, balance: null });
                console.log("error while handling change in account");
                console.log(error);
            }
        }
    })

    async function refreshDetails() {
        if (Provider.provider) {
            try {
                const _signer = await Provider.provider.getSigner();
                let _accAddress = await _signer.getAddress();
                //_accAddress = shortenAddress(_accAddress);
                let _accBalance = ethers.utils.formatEther(await _signer.getBalance());
                _accBalance = _accBalance.match(/^-?\d+(?:\.\d{0,2})?/)[0];
                setAcc({ address: _accAddress, balance: _accBalance });
                setProvider({ provider: Provider.provider, signer: _signer });
            } catch (error) {
                setAcc({ address: null, balance: null });
                console.log("error while handling change in account");
                console.log(error);
            }
        }
    }

    async function connectWallet() {
        // const _provider = new ethers.providers.JsonRpcProvider(`${localRpc}`);
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            await _provider.send("eth_requestAccounts", []);
            const _signer = await _provider.getSigner();
            let _accAddress = await _signer.getAddress();
            //_accAddress = shortenAddress(_accAddress);
            let _accBalance = ethers.utils.formatEther(await _signer.getBalance());
            _accBalance = _accBalance.match(/^-?\d+(?:\.\d{0,2})?/)[0];
            setAcc({ address: _accAddress, balance: _accBalance });
            setProvider({ provider: _provider, signer: _signer });
            !(contract) && (await connectContract());

        } catch (error) {
            console.log("error while connecting with web3 provider");
            console.log(error);
        }


    }

    const blockchain = {
        'sendTransaction': sendTransaction,
        'getTxCount': getTxCount,
        'getAllTx': getAllTx
    }

    async function getAllTx() {
        try {
            let _contract = await contract.connect(Provider.signer);
            const tx = await _contract.getAllTransactions();
            let struct_tx = tx.map((transaction) => {
               if (transaction.sender == account.address) {
                    return {
                        addressTo: transaction.receiver,
                        addressFrom: transaction.sender,
                        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                        message: transaction.message,
                        keyword: transaction.keyword,
                        amount: parseInt(transaction.amount._hex) / (10 ** 18)
                    }
               }
            });
            return struct_tx;
        } catch (error) {
            console.log('error while fetching tx count');
            console.log(error);
        }
    }

    async function getTxCount() {
        try {
            let _contract = await contract.connect(Provider.signer);
            const count = await _contract.getTransactionCount();
            return count.toNumber();
        } catch (error) {
            console.log('error while fetching tx count');
            console.log(error);
        }
    }

    async function sendTransaction(obj) {
        try {
            let _contract = await contract.connect(Provider.signer);
            const tx = await _contract.transfer(obj.addr, obj.msg, obj.keyword, { value: ethers.utils.parseEther(obj.amount) });
            await tx.wait();
            await refreshDetails();
            // console.log(tx);
        } catch (error) {
            console.log('error while sending transaction');
            console.log(error);
        }
    }

    let connectContract = async () => {
        const _contract = await new ethers.Contract(contractAddress, artifacts.abi, Provider.provider);
        setContract(_contract);
    }

    useEffect(() => {
        //console.log("useEffect: updating account details");
        let updateDetails = async () => {
            await connectWallet();
        }
        updateDetails();
    }, [])


    return (
        <context.Provider value={{ contract, account, Provider, connectWallet, blockchain }}>
            {props.children}
        </context.Provider>
    )
}

export { ContractState };