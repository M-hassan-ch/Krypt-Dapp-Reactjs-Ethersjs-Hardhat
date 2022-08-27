import React from 'react'
import style from '../stylesheet/footer.module.css';
import logo from '../images/logo.png';

export default function Footer() {
    return (
        <>
            <div className={"container-fluid pt-5 pb-3 mt-5"}>
                <div className={"row justify-content-around "}>

                    <div className={`col-md-2 ${style.logo} ${style.redBorder}`}>
                        <img src={logo} alt="logo" style={{ width: '70%', height: '100%' }} />
                    </div>

                    <div className={`col-md-6 ${style.redBorder}`} style={{ marginRight: '5%' }}>
                        <div className={`row justify-content-evenly align-items-center ${style.blueBorder}`}>
                            <div className={`col-md-2 ${style.menuBar}`}>
                                <a href="/" className={`${style.menuItem} `}>Market</a>
                            </div>

                            <div className={`col-md-2 ${style.menuBar}`}>
                                <a href="/" className={`${style.menuItem}`}>Exchange</a>
                            </div>

                            <div className={`col-md-2 ${style.menuBar}`}>
                                <a href="/" className={`${style.menuItem}`}>Tutorials</a>
                            </div>

                            <div className={`col-md-2 ${style.menuBar}`}>
                                <a href="/" className={`${style.menuItem}`}>Wallets</a>
                            </div>
                        </div>
                    </div>

                    <div className={`col-12 ${style.logo} ${style.redBorder}`}>
                        <p className={`my-4 ${style.redBorder}`} style={{textAlign:'center'}}>Come join us and hear for the unexpected miracle</p>
                        <p className="" style={{textAlign:'center'}}>info@kryptomastery.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
