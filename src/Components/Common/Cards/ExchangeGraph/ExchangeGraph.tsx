import React, { useState } from 'react'
import { DownArrow, SearchIcon } from '../../../../Assets/Images/Icons/SvgIcons'
import InputCustom from '../../FormInputs/Input/Input'
import CustomTable from '../../Table/Table'
import sampleGraph from '../../../../Assets/Images/graph-images/trading-chart.png'
import './ExchangeGraph.scss';

const ExchangeGraph = () => {

    const data = [
        { symbols: "BELLUSDT", lastPrice: "0.7447", percentage: "+1.33%" },
        { symbols: "ATOMUSDT", lastPrice: "11.51", percentage: "+1.14%" },
        { symbols: "AUDIOUSDT", lastPrice: "0.7447", percentage: "-1.10%" },
        { symbols: "JASMYUSDT", lastPrice: "0.7447", percentage: "-1.10%" },
        { symbols: "IMXUSDT", lastPrice: "1.020", percentage: "-1.10%" },
        { symbols: "IDUSDT", lastPrice: "0.7447", percentage: "-1.10%" },
        { symbols: "FOOTBALLUSDT", lastPrice: "638.74", percentage: "-1.10%" },
        { symbols: "WOOUSDT", lastPrice: "0.7447", percentage: "-1.10%" },
    ];
    const [showSearch, setShowSearch] = useState(false);
    const [focus, setFocus] = useState(false);

    return (
        <>
            <div className='TradeProHeader'>
                <div className="TradeProfHeaderMain" onMouseLeave={() => { return focus ? "" : setShowSearch(false) }} onMouseEnter={() => setShowSearch(true)}>
                    <h4>LIBX/GTH <DownArrow /></h4>
                    {showSearch &&
                        <div className='searchSymbols'>
                            <InputCustom onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} leftIcon={<SearchIcon />} placeholder="Search" />
                            <CustomTable
                                fields={['Symbols', 'Last Price', '24h %']}
                            >
                                {
                                    data.length > 0 &&
                                    data.map((item, index) => {
                                        return (
                                            (
                                                <tr>
                                                    <td><span className="symbol">{item.symbols}</span> Perpetual</td>
                                                    <td><span className={[1, 4, 6].includes(index) ? 'green' : ""}>{item.lastPrice}</span></td>
                                                    <td><span className={`${[2, 3, 4, 5, 6, 7].includes(index) ? "red" : ""} ${[0, 1].includes(index) ? "green" : ""}`}>{item.percentage}</span></td>
                                                </tr>
                                            )
                                        )
                                    })
                                }
                            </CustomTable>
                        </div>}
                </div>
                <div className="TradeProfHeaderSec">
                    <h5><span className="green">1874.6</span></h5>
                </div>
                <ul>
                    <li>
                        <h6>Mark</h6>
                        <p>1,877.1</p>
                    </li>
                    <li>
                        <h6>Index</h6>
                        <p>1,875.6</p>
                    </li>
                    <li>
                        <h6>Funding / Countdown</h6>
                        <p><span className="yellow">0.0074%</span><span className="ms-3">03:01:44</span></p>
                    </li>
                    <li>
                        <h6>24h Change</h6>
                        <p><span className='red'>-84.5 -4.32%</span></p>
                    </li>
                    <li>
                        <h6>24h High</h6>
                        <p>1,875.6</p>
                    </li>
                    <li>
                        <h6>24h Low</h6>
                        <p>1,785.6</p>
                    </li>
                    <li>
                        <h6>24h Volume(LIBX)</h6>
                        <p>5,151.422</p>
                    </li>
                    <li>
                        <h6>24h Volume(GTH)</h6>
                        <p>9,659,695.43</p>
                    </li>
                </ul>
            </div>
            <div>
                <img className='w-100' src={sampleGraph} alt="" />
            </div>
        </>
    )
}

export default ExchangeGraph
