import React from 'react'
import './DetailsCard.scss';
import { DetailsCardIcon } from '../../../../Assets/Images/Icons/SvgIcons';

type propTypes = {
    className?: string,
    type?: "blue" | "yellow" | "darkBlue",
    value?: string | number,
    heading?: string
}

const DetailsCard = (props: propTypes) => {
    const { className, value, heading, type, } = props;
    return (
        <div className={`DetailsCard ${type || 'blue'} ${className || ""}`}>
            <span className='DetailsCardIcon'>
                <DetailsCardIcon />
            </span>
            <div>
                {value && <h3>{value}</h3>}
                {heading && <p>{heading}</p>}
            </div>
        </div>
    )
}

export default DetailsCard
