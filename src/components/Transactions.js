import React from 'react'
import style from '../stylesheet/transaction.module.css';
import useFetch from '../utility/gifApi';
import Context from '../context/contractContext';
import { useContext, useEffect, useState } from 'react';
import { shortenAddress } from '../utility/shortenAddress';


export default function Transactions() {
  const context = useContext(Context);
  const [transactions, setTransactions] = useState(null);

  function isOdd(val) {
    return val % 3;
  }


  function Card(props) {

    const [url, setUrl] = useState('');
    if (props.tx) {
      useFetch(props.tx.keyword).then(data => {
        setUrl(data);
      });
    }

    return (
      <>
        {props.tx ? (<>

          <div className={`col-3 px-4 py-3 my-3 ${style.yellowBorder} ${style.card}`}>
            <p className={`${style.text} `}>
              <b>From:</b> {shortenAddress(`${props.tx.addressFrom}`)} <br />
              <b>To:</b> {shortenAddress(`${props.tx.addressTo}`)} <br />
              <b>Amount:</b> {props.tx.amount} (ETH)
            </p>

            <div >
              <img src={`${url}}`} alt="" className={`${style.yellowBorder}`} style={{ height: '200px', width: '100%' }} />
            </div>

            <div className='mt-4 pt-3 pb-2' style={{ background: 'black', borderRadius: '35px' }}>
              <p className={`${style.time}`}> {props.tx.timestamp} </p>
            </div>
          </div>
          {!(isOdd((props.index) + 1)) && (<div className="w-100"></div>)}
        </>) : <></>
        }
      </>
    )
  }

  useEffect(() => {
    let load = async () => {

      if (context.contract) {
        setTransactions(await context.blockchain.getAllTx());
      }
    }
    load();
  }, [context.contract, context.account]);


  return (
    <>
      <div className={`container-fluid mt-5 pt-2 ${style.redBorder}`}>
        <div className={`row mt-5 ${style.blueBorder}`}>
          <div className={`col-12 ${style.yellowBorder}`}>
            <h1 className={`${style.text}`} style={{ textAlign: 'center' }}>
              Latest Transactions
            </h1>
          </div>
        </div>

        <div className={`row mx-auto mt-5 ${style.blueBorder} justify-content-evenly`}>

          {transactions && transactions.reverse().map((transaction, i) => {
            //console.log(transaction);
            return < Card tx={transaction} key={i} index={i} />;
          })}

          {/* <div className={`col-3 px-4 py-3 my-3 ${style.yellowBorder} ${style.card}`}>
            <p className={`${style.text}`}>
              <b>From:</b> address <br />
              <b>To:</b> address <br />
              <b>Amount:</b> Amount (ETH)
            </p>

            <div >
              <img src="" alt="" className={`${style.yellowBorder}`} style={{ height: '200px', width: '100%' }} />
            </div>

            <div className='mt-4 pt-3 pb-2' style={{ background: 'black', borderRadius: '35px' }}>
              <p className={`${style.time}`}>Timestamp</p>
            </div>
          </div>
          */}


        </div>
      </div>
    </>
  )
}

