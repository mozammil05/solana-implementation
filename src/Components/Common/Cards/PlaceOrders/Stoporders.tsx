import React from 'react'
import TokenSelect from '../../FormInputs/TokenSelect/TokenSelect'
import './StopOrders.scss';
import { InfoIcon, WalletIcon } from '../../../../Assets/Images/Icons/SvgIcons'
import CustomSelect from '../../FormInputs/Select/Select'
import ButtonCustom from '../../Button/ButtonCustom'
const Stoporders = () => {
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
        <div className="StopOrders">
            <div className='StopOrdersBox'>
                <div>
                    <input className="amountInput" type="text" id="sell" placeholder='00.00' />
                </div>
                <div className='text-end'>
                    <TokenSelect className='ms-auto' />
                </div>
            </div>
            <div className='StopOrdersBox'>
                <div>
                    <input className="amountInput" type="text" id="buy" placeholder='00.00' />
                </div>
                <div className='text-end'>
                    <TokenSelect className='ms-auto' />
                </div>
            </div>
            <div className="StopOrdersMore">
                <div>
                    <p>Stop Price For BALD</p>
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

export default Stoporders
