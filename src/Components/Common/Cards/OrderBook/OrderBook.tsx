import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import './OrderBook.scss';
import { UpArrow } from '../../../../Assets/Images/Icons/SvgIcons';

const OrderBook = () => {
    const data = [
        { price: "29588", size: "0.295", sum: "3.296" },
        { price: "29585", size: "0.340", sum: "3.001" },
        { price: "29584", size: "0.334", sum: "2.661" },
        { price: "29583", size: "0.406", sum: "2.327" },
        { price: "29582", size: "0.289", sum: "1.921" },
        { price: "29581", size: "1.370", sum: "1.632" },
        { price: "29580", size: "0.237", sum: "0.262" },
        { price: "29577", size: "0.025", sum: "0.025" },
    ];

    const data2 = [
        { price: "29588", size: "0.295", sum: "3.296" },
        { price: "29585", size: "0.340", sum: "3.001" },
        { price: "29584", size: "0.334", sum: "2.661" },
        { price: "29583", size: "0.406", sum: "2.327" },
        { price: "29582", size: "0.289", sum: "1.921" },
        { price: "29581", size: "1.370", sum: "1.632" },
        { price: "29580", size: "0.237", sum: "0.262" },
        { price: "29577", size: "0.025", sum: "0.025" },
    ];
    return (
        <CommonCard cardTitle='Order Book' className="OrderBookCard" contentBg>
            <ul>
                <li>
                    <h3>Price (USDT)</h3>
                    <h3>Size (BTC)</h3>
                    <h3>Sum (BTC)</h3>
                </li>
                {
                    data.map(item => (
                        <li>
                            <p className='redText'>{item.price}</p>
                            <p>{item.size}</p>
                            <p>{item.sum}</p>
                        </li>
                    ))
                }
                <li className="dataHeading">
                    <h2>29,575</h2>
                    <UpArrow />
                    <h4>29,594</h4>
                </li>

                {
                    data2.map(item => (
                        <li>
                            <p className='greenText'>{item.price}</p>
                            <p>{item.size}</p>
                            <p>{item.sum}</p>
                        </li>
                    ))
                }
            </ul>
        </CommonCard>
    )
}

export default OrderBook
