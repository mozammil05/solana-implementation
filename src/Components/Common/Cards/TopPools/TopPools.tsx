import React from 'react'
import './TopPools.scss';
import CommonCard from '../CommonCard/CommonCard';
import CustomTable from '../../Table/Table';
import logo from '../../../../Assets/Images/logo/small-logo.svg';
import { RightArrow } from '../../../../Assets/Images/Icons/SvgIcons';

const TopPools = () => {
    const data = [
        {
            id: 1,
            poolName: "LIBX Token Staking",
            poolDesc: "Single-sided token staking to earn % platform fees",
            poolIcon: logo,
            type: "AMM Pool",
            apy: "19%",
            vol: "$3,216,988",
        },
        {
            id: 2,
            poolName: "LIBX Token Staking",
            poolDesc: "Single-sided token staking to earn % platform fees",
            poolIcon: logo,
            type: "AMM Pool",
            apy: "19%",
            vol: "$3,216,988",
        },
        {
            id: 3,
            poolName: "LIBX Token Staking",
            poolDesc: "Single-sided token staking to earn % platform fees",
            poolIcon: logo,
            type: "AMM Pool",
            apy: "19%",
            vol: "$3,216,988",
        },
    ]
    return (
        <CommonCard noHeaderSpacing cardTitle='Top Liquidity Pools - Invest and Earn APY Today' className="TopPools">
            <CustomTable
                fields={["", 'Pool', 'Type', "APY", "24h Vol", "", ""]}
            >
                {
                    data.map(item => (
                        <tr key={item.id}>
                            <td></td>
                            <td>
                                <div className='poolName'>
                                    <img src={item.poolIcon} alt="" />
                                    <div>
                                        <h4>{item.poolName}</h4>
                                        <p>{item.poolDesc}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{item.type}</td>
                            <td>{item.apy}</td>
                            <td>{item.vol}</td>
                            <td className='text-end'>
                                <button className="arrow_btn"><RightArrow /></button>
                            </td>
                            <td></td>
                        </tr>
                    ))
                }
            </CustomTable>
        </CommonCard>
    )
}

export default TopPools
