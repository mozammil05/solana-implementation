import React from 'react'
import './QuickLinks.scss';
import CommonCard from '../CommonCard/CommonCard';
import { EarnAndInvestIcon, GovernanceIcon, LearningCentreIcon, RedirectIcon, TradingIcon } from '../../../../Assets/Images/Icons/SvgIcons';
// import { Link } from 'react-router-dom';
import ButtonCustom from '../../Button/ButtonCustom';

const QuickLinks = () => {
    const data = [
        {
            icon: <TradingIcon />,
            title: "Trading Desk",
            to: "/auth/trade/simple/market",
        },
        {
            icon: <EarnAndInvestIcon />,
            title: "Earn & Invest",
            to: "/auth/earn/overview",
        },
        {
            icon: <LearningCentreIcon />,
            title: "Learning Centre",
            to: "",
        },
        {
            icon: <GovernanceIcon />,
            title: "Governance",
            to: "",
        },
    ]
    return (
        <CommonCard cardTitle='Quick Links' className="QuickLinks">
            <ul>
                {
                    data.map(item => (
                        <li key={item.title}>
                            <ButtonCustom
                                fluid
                                title={<>
                                    <span>{item.icon}</span>
                                    {item.title}
                                    <span><RedirectIcon /></span>
                                </>}
                                navigate={item.to}
                                className="bordered-blue QuickLink"
                            />
                        </li>
                    ))
                }
            </ul>
        </CommonCard>
    )
}

export default QuickLinks
