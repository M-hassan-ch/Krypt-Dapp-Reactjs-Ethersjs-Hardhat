import React from 'react';
import style from '../stylesheet/navbar.module.css';
import logo from '../images/logo.png';
import Context from '../context/contractContext';
import { useContext } from 'react';


export default function Navbar() {

  const context = useContext(Context);

  function LoginBtn(){
    return (
      <div className={`col-md-3  ${style.yellowBorder}`}>
        <button className={`btn btn-primary py-2 ${style.loginBtn} ${style.blueBorder}`} onClick={context.connectWallet}>Login</button>
      </div>
    )
  }

  return (
    <>
      <div className={"container-fluid py-4 "}>
        <div className={"row justify-content-between "}>

          <div className={`col-md-2 ${style.logo} ${style.redBorder}`}>
            <img src={logo} alt="logo" style={{ width: '100%', height: '100%' }} />
          </div>

          <div className={`col-md-6 ${style.redBorder} `} style={{ marginRight: '5%' }}>
            <div className={`row justify-content-between align-items-end ${style.blueBorder}`} style={{height:'100%'}}>
              <div className={`col-md-2 ${style.menuBar} ${style.yellowBorder}`}>
                <a href="/" className={`${style.menuItem} ${style.blueBorder}`}>Market</a>
              </div>

              <div className={`col-md-2 ${style.menuBar} ${style.yellowBorder}`}>
                <a href="/" className={`${style.menuItem}  ${style.blueBorder}`}>Exchange</a>
              </div>

              <div className={`col-md-2 ${style.menuBar} ${style.yellowBorder}`}>
                <a href="/" className={`${style.menuItem}  ${style.blueBorder}`}>Tutorials</a>
              </div>

              <div className={`col-md-2 ${style.menuBar} ${style.yellowBorder}`}>
                <a href="/" className={`${style.menuItem}  ${style.blueBorder}`}>Wallets</a>
              </div>

              {!(context.account?.address) && (LoginBtn())}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
