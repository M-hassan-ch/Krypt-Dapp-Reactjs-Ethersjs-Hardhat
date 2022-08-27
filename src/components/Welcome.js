import React from 'react';
import style from '../stylesheet/welcome.module.css';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Context from '../context/contractContext';
import { useContext } from 'react';
import { shortenAddress } from '../utility/shortenAddress';




export default function Welcome() {

    const context = useContext(Context);

    function connectBtn() {
        return (
            <>
                <div className={`row ${style.blueBorder} mt-2 mb-4`}>
                    <div className={`col-md-4 ${style.redBorder}`}>
                        <button className={`${style.loginBtn}`} onClick={context.connectWallet}>Connect</button>
                    </div>
                </div>
            </>
        )
    }

    let whiteGlassmorphism = {

        borderRadius: "9px",
        backdropFilter: "blur(5px)",
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white'
    }

    async function makeTransaction() {
        let _addressTo = document.getElementById('addressTo')?.value;
        let _amount = document.getElementById('amount')?.value;
        let _gifKeyword = document.getElementById('gifKeyword')?.value;
        let _msg = document.getElementById('msg')?.value;

        const obj = { addr: _addressTo, amount: _amount, keyword: _gifKeyword, msg: _msg };

        await context.blockchain.sendTransaction(obj);
    }

    return (
        <>
            <div className="container mt-5 pt-3">
                <div className={`row ${style.redBorder} mt-5 justify-content-between`}>
                    <div className={`col-md-6 ${style.yellowBorder} ${style.text} `}>

                        <div className={`row ${style.blueBorder}`}>
                            <div className={`col-md-10 ${style.redBorder} ms-md-3`}>
                                <h1 className={`${style.heading}`}>
                                    Buy and Sell <br />
                                    trusted Cryptos
                                </h1>
                                <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto. Trusted plateform to be your partner</p>
                            </div>
                        </div>

                        {/* connect button */}
                        {!(context.account.address) && (
                            connectBtn()
                        )}
                        {/* {connectBtn()} */}

                        <div className={`row ${style.blueBorder} mt-5`}>
                            <div className={`col-12 ${style.redBorder} mt-3`}>
                                <table className="table table-bordered">

                                    <tbody>
                                        <tr>

                                            <td>Reliability</td>
                                            <td>Ethereum</td>
                                            <td>Web 3.0</td>
                                        </tr>
                                        <div style={{ width: '306%', height: '1px', background: 'grey' }}></div>
                                        <tr>

                                            <td>Blockchain</td>
                                            <td>ERC Tokens</td>
                                            <td>Coinbase</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className={`col-md-5 ${style.yellowBorder} ${style.text} `}>

                        {/* EthCard */}
                        <div className={`row ${style.blueBorder} justify-content-center`}>

                            <div className={`col-md-9 ${style.redBorder} ${style.ethCard} py-2`}>
                                <div className={`row ${style.blueBorder}  justify-content-between pb-4`}>

                                    <div className={`col-md-3 ${style.yellowBorder}`}>
                                        <SiEthereum fontSize={50} className={`${style.SiEthereum}`} />
                                    </div>

                                    <div className={`col-md-3 ${style.yellowBorder}`}>
                                        <BsInfoCircle fontSize={40} className={`${style.temp} px-2`} />
                                    </div>

                                </div>

                                <div className={`row ${style.blueBorder} justify-content-between mt-5`}>

                                    <div className={`col ${style.yellowBorder} mt-2`}>
                                        <p style={{ fontWeight: '700', letterSpacing: '2px' }}>
                                            {context.account.address ? `${shortenAddress(context.account.address)}` : '.......'}
                                        </p>
                                        <h3>
                                            {context.account.balance ? `${context.account.balance} ETH` : 'Ethereum'}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* input form */}
                        <div className={`mt-4 row ${style.blueBorder} justify-content-center py-3`}>
                            <div className={`col-md-10 ${style.redBorder} ${style.blueGlassmorphism} py-4 px-3`}>

                                <input type="text" className={`form-control `} placeholder="Address To" id='addressTo' style={whiteGlassmorphism} />

                                <input type="text" className={`form-control  mt-3`} id="amount" placeholder="Amount (ETH)" style={whiteGlassmorphism} />

                                <input type="text" className={`form-control  mt-3`} id="gifKeyword" placeholder="Keyword (Gif)" style={whiteGlassmorphism} />

                                <input type="text" className={`form-control  mt-3`} id="" placeholder="Twitter @" style={whiteGlassmorphism} />

                                <input type="text" className={`form-control  mt-3`} id="msg" placeholder="Enter Message" style={whiteGlassmorphism} />

                                <hr />

                                <button className={`btn btn-primary ${style.sendBtn}`} style={{ width: '100%' }} onClick={makeTransaction}>
                                    Send now
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
