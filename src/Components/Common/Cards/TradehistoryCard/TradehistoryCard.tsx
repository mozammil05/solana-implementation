import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import CustomTable from '../../Table/Table'
import { CalendarIcon, DownloadIcon, TrandingIcon } from '../../../../Assets/Images/Icons/SvgIcons'
import './TradehistoryCard.scss';
import ButtonCustom from '../../Button/ButtonCustom'

const TradehistoryCard = () => {
    return (
        <CommonCard className='TradeHistoryCard' cardTitle='My Trade History' viewAllNavigate='/auth/dashboard/trade-history'>
            <div className="TradeHistoryCardHeader">
                <span className="TradeHistoryCardHeaderDate"><CalendarIcon />Apr 6, 2022 - Apr 27, 2022</span>
                <ButtonCustom
                    title={<><DownloadIcon /> Download CSV</>}
                    className='bordered-blue'
                />
            </div>
            <CustomTable
                fields={["Asset", "Open Price", "Market Price", "Size", "Profit/Loss", "Fees paid", "Timestamp"]}
            >
                {
                    [1, 2, 3, 4, 5].map(item => (
                        <tr key={item}>
                            <td>Gather</td>
                            <td>$0.007100</td>
                            <td>$0.010100</td>
                            <td>1,234,666</td>
                            <td className='value_text'>
                                <h3>$3,245.00</h3>
                                <p>
                                    <span><TrandingIcon /></span>
                                    12%
                                </p>
                            </td>
                            <td>$0.25</td>
                            <td>2023-04-02 12:35</td>
                        </tr>
                    ))
                }
            </CustomTable>
        </CommonCard>
    )
}

export default TradehistoryCard
