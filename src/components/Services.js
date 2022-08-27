import React from "react";
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';
import style from '../stylesheet/services.module.css';

function ServiceCard(props) {
    return (
        <>
            <div className={`mt-3 py-3 row ${style.yellowBorder} ${style.whiteGlassmorphism}`}>
                <div className={`col-md-2 ${style.blueBorder}`}>
                    {props.icon}
                </div>
                <div className={`col-md-10 ${style.redBorder}`}>
                    <div>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.title}</p>
                    </div>
                    <div>
                        <p>{props.subtitle}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default function Services() {
    return (
        <>
            <div className="container mt-5 pt-1">
                <div className={`row mt-5 ${style.redBorder} justify-content-between align-items-center`}>
                    <div className={`col-md-6 ${style.redBorder}`} style={{ lineHeight: '29px' }}>
                        <h3 className={` ${style.title} `}>
                            Services that we
                            <br />
                            continue to improve
                        </h3>
                        <p className="mt-3">
                            The best choice for buying and selling your crypto assets, with the
                            various super friendly services we offer
                        </p>
                    </div>

                    <div className={`col-md-5 ${style.redBorder} `}>
                        <ServiceCard
                            title="Security gurantee"
                            icon={<BsShieldFillCheck fontSize={40} className={`${style.icon} ms-2`} style={{ background: '#2952E3', color: 'white' }} />}
                            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products" className={``}
                        />

                        <ServiceCard
                            title="Best exchange rates"
                            icon={<BiSearchAlt fontSize={40} className={`${style.icon} ms-2`} style={{ background: '#8945F8', color: 'white' }} />}
                            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                        />
                        <ServiceCard
                            title="Fastest transactions"
                            icon={<RiHeart2Fill fontSize={40} className={`${style.icon} ms-2`} style={{ background: '#F84550', color: 'white' }} />}
                            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                        />

                    </div>

                </div>
            </div>
        </>
    )
}
