import React from 'react';
import './Market.scss';
import TokenSelect from '../../FormInputs/TokenSelect/TokenSelect';
import { InfoIcon, SwapIcon, WalletIcon } from '../../../../Assets/Images/Icons/SvgIcons';
import ButtonCustom from '../../Button/ButtonCustom';
import Tooltip from '../../Tooltip/Tooltip';
const Market = () => {
    return (
        <>
            <div className='market_data_sec'>
                <div className='market_sec'>
                    <div className='market_sec_data'>
                        <div className='market_sec_counting'>
                            <input placeholder="0.0" type="text" className="amountInput" name="fname" />
                            <p>$0.00</p>
                        </div>
                        <div className='market_sec_content'>
                            <TokenSelect />
                            <p className='balance_text'>Balance: <span>37,363</span></p>
                        </div>
                    </div>
                </div>
                <button className='swapBtn'><SwapIcon /></button>
                <div className='market_sec'>
                    <div className='market_sec_data'>
                        <div className='market_sec_counting'>
                            <input placeholder="0.0" type="text" className="amountInput" name="fname" />
                            <p>$0.00</p>
                        </div>
                        <div className='market_sec_content'>
                            <TokenSelect />
                            <p className='balance_text'>Balance: <span>28,629145</span></p>
                        </div>
                    </div>
                </div>
                <div className='market_data_sec_footer'>
                    <p> <Tooltip icon={<InfoIcon />} heading="Heading" content='This is content' />
                        <span className="ms-2">1 LIBX = 0.03084 GTH</span></p>
                    <ButtonCustom
                        title={<>
                            <span className='me-2'><WalletIcon /></span>
                            Connect wallet
                        </>}
                    />
                </div>
            </div>
        </>
    )
}

export default Market
