// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address indexed from,
        address payable receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address payable receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    receive() external payable {}

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function transfer(address payable receiver,
        string memory message,
        string memory keyword) public payable
    {
        require(msg.value <= msg.sender.balance, "Not enough Balance");
        receiver.transfer(msg.value);
        console.log('receiver balance', receiver.balance);
        console.log('sender balance', msg.sender.balance);
        console.log('contract balance', address(this).balance);

        transactionCount += 1;
        
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                msg.value,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            msg.value,
            message,
            block.timestamp,
            keyword
        );
    }
}
