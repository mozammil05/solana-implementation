import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import graph from '../../../../Assets/Images/graph-images/liquidity-graph.png';
import './LiquidityCard.scss'

const LiquidityCard = () => {
    return (
        <CommonCard cardTitle='Liquidity' className="LiquidityCard">
            <img src={graph} alt="graph" />
        </CommonCard>
    )
}

export default LiquidityCard
