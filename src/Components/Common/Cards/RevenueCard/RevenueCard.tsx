import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import graph from '../../../../Assets/Images/graph-images/revenue-graph.png';
import './RevenueCard.scss';
const RevenueCard = () => {
    return (
        <CommonCard cardTitle='Revenue' className="RevenueCard">
            <img src={graph} alt="graph" />
        </CommonCard>
    )
}

export default RevenueCard
