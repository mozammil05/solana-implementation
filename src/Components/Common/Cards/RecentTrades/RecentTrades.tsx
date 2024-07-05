import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import './RecentTrades.scss';
import CustomTable from '../../Table/Table'

const RecentTrades = (props: { showTime?: boolean, }) => {
    const data = [
        {
            id: 1,
            price: 0.03100,
            amount: 3.22559,
            date: '12/04/2023',
            time: "02:35",
            change: "buy",
        },
        {
            id: 2,
            price: 0.03091,
            amount: 3.2342,
            date: '12/04/2023',
            time: "02:35",
            change: "buy",
        },
        {
            id: 3,
            price: 0.03084,
            amount: 0.37014,
            date: '11/04/2023',
            time: "12: 39",
            change: "sell",
        },
        {
            id: 4,
            price: 0.03100,
            amount: 3.22559,
            date: '09/04/2023',
            time: "02: 54",
            change: "buy",
        },
        {
            id: 5,
            price: 0.03100,
            amount: 3.22559,
            date: '09/04/2023',
            time: "02: 54",
            change: "buy",
        },
        {
            id: 6,
            price: 0.03100,
            amount: 3.22559,
            date: '09/04/2023',
            time: "02: 54",
            change: "buy",
        },
        {
            id: 7,
            price: 0.03100,
            amount: 3.22559,
            date: '09/04/2023',
            time: "02: 54",
            change: "buy",
        },
    ]
    return (
        <CommonCard
            cardTitle='Recent Trades'
            noHeaderSpacing
            className="recentTradesCard"
        >
            <CustomTable
                fields={
                    props.showTime ?
                        ["S. No", "Price", "Amount", "Time", "24h Change"]
                        :
                        ["S. No", "Price", "Amount", "Type"]}
            >
                {
                    data.length > 0 &&
                    data.map(item => (
                        <tr key={item.id}>
                            <td>
                                <>{item.id}</>
                            </td>
                            <td><>{item.price}</></td>
                            <td><>{item.amount}</></td>
                            {props.showTime && <td>
                                <p>{item.date}</p>
                                <p className='timeText'>{item.time}</p>
                            </td>}
                            <td>
                                {
                                    item.change === 'buy' ?
                                        <button className='buyBtn'>Buy</button>
                                        :
                                        <button className='sellBtn'>Sell</button>
                                }
                            </td>
                        </tr>
                    ))
                }
            </CustomTable>
        </CommonCard>
    )
}

RecentTrades.defaultProps = {
    showTime: true,
}

export default RecentTrades
