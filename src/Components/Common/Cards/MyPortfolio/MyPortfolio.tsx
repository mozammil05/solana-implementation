import React, { useState } from 'react'
import './MyPortfolio.scss';
import CommonCard from '../CommonCard/CommonCard';
import graphImg from '../../../../Assets/Images/graph-images/my-portfolio-graph.png';
import { SettingsIcon } from '../../../../Assets/Images/Icons/SvgIcons';

const MyPortfolio = () => {
    const buttons = [
        {
            value: 1,
            label: "1H",
        },
        {
            value: 24,
            label: "1D",
        },
        {
            value: 168,
            label: "1W",
        },
        {
            value: 730,
            label: "1M",
        },
        {
            value: 8760,
            label: "1Y",
        },
        {
            value: 'max',
            label: "Max",
        },
    ]
    const [active, setActive] = useState<number | string>(1);
    return (
        <CommonCard contentBg contentClassName="MyPortfolioContent" className="MyPortfolio" cardTitle='My Portfolio'>
            <div className="MyPortfolioHeader">
                <div>
                    <h3>$122,171.67</h3>
                    <p>
                        <span className="danger">-2.4%</span>
                        {" "}.{" "}
                        <span className="positive">$2553.09</span>
                    </p>
                </div>
                <button className="SettingsBtn"><SettingsIcon /></button>
            </div>
            <img src={graphImg} className="graphImg" alt="graph" />
            <div className="MyPortfolioAction">
                {
                    buttons.map(item => (
                        <button key={item.value} className={item.value === active ? 'active' : ""} onClick={() => setActive(item.value)}>{item.label}</button>
                    ))
                }
            </div>
        </CommonCard>
    )
}

export default MyPortfolio
