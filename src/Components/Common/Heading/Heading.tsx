import React, { ReactNode } from 'react';
import './Heading.scss';
const CommonHeading = ({ heading, subText, centered, className, smallHeading }: { smallHeading?: boolean, className?: string, heading?: string | ReactNode, subText?: string | ReactNode, centered?: boolean }) => {
    return (
        <>
            <div className={`CommonHeading ${smallHeading ? 'SmallHeading' : ''} ${className || ""} ${centered ? 'text-center' : ''}`}>
                <h2>{heading}</h2>
                {subText && <p>{subText}</p>}
            </div>
        </>
    )
}

export default CommonHeading;