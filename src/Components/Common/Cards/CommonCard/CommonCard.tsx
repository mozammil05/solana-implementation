import React, { ReactNode } from 'react';
import './CommonCard.scss';
import { Link } from 'react-router-dom';
import { RightArrowCirlce } from '../../../../Assets/Images/Icons/SvgIcons';

type propTypes = {
    cardTitle?: string,
    viewAllNavigate?: string,
    className?: string,
    children?: ReactNode,
    contentBg?: boolean,
    contentClassName?: string,
    noHeaderSpacing?: boolean,
}

const CommonCard = (props: propTypes) => {
    const {
        cardTitle,
        viewAllNavigate,
        className,
        children,
        contentClassName,
        contentBg,
        noHeaderSpacing,
    } = props;
    return (
        <div className={`Card ${noHeaderSpacing ? 'headerNoSpacing' : ""} ${className || ""}`}>
            <div className='CardHeader'>
                <h3>{cardTitle}</h3>
                {
                    viewAllNavigate &&
                    <Link
                        to={viewAllNavigate}
                    >
                        View all <span><RightArrowCirlce /></span>
                    </Link>
                }
            </div>
            <div className={`${contentClassName || ""} ${contentBg ? 'contentBg' : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default CommonCard
