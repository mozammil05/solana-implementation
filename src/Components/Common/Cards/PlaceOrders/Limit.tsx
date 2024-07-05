import React from 'react'
import TokenSelect from '../../FormInputs/TokenSelect/TokenSelect'
import './Limit.scss';
import { InfoIcon, SwapIcon, WalletIcon } from '../../../../Assets/Images/Icons/SvgIcons'
import CustomSelect from '../../FormInputs/Select/Select'
import ButtonCustom from '../../Button/ButtonCustom'

const Limit = () => {
    const expireOptions = [
        {
            value: '7',
            label: "7 Days",
        },
        {
            value: '30',
            label: "1 Month",
        }
    ]
    return (
        <div className="LimitCard">
            <div className='LimitCardBox'>
                <div>
                    <label htmlFor="sell">Sell</label>
                    <input className="amountInput" type="text" id="sell" placeholder='00.00' />
                    <p className='LimitCardBoxTxt'>$ <span>0.10963</span></p>
                </div>
                <div className='text-end'>
                    <p className='LimitCardBoxTxt'>Balance: <span>0</span></p>
                    <TokenSelect className='ms-auto' />
                </div>
            </div>
            <button className='swapBtn'><SwapIcon /></button>
            <div className='LimitCardBox'>
                <div>
                    <label htmlFor="buy">Buy</label>
                    <input className="amountInput" type="text" id="buy" placeholder='00.00' />
                    <p className='LimitCardBoxTxt'>$ <span>0</span></p>
                </div>
                <div className='text-end'>
                    <p className='LimitCardBoxTxt'>Balance: <span>0</span></p>
                    <TokenSelect className='ms-auto' />
                </div>
            </div>
            <div className="LimitCardMore">
                <div>
                    <p>Sell BALD At Rate</p>
                    <h4>3.12</h4>
                </div>
                <div>
                    <p className='justify-content-end'>Expires In <span><InfoIcon /></span></p>
                    <CustomSelect
                        className='ms-auto'
                        defaultValue={{ value: "7", label: "7 Days" }}
                        options={expireOptions}
                    />
                </div>
            </div>
            <ButtonCustom
                fluid
                className='walletBtn'
                title={<><span><WalletIcon /> Connect wallet</span></>}
            />
        </div>
    )
}

export default Limit
