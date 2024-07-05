import React, { ReactNode } from 'react'
import './SubHeader.scss'
import { NavLink, useLocation } from 'react-router-dom'

type propTypes = {
    heading?: string,
    navigationLinks?: {
        id: number,
        label?: string | ReactNode,
        to?: string,
        alterLocation?: string[],
    }[],
    className?: string,
}

const SubHeader = (props: propTypes) => {
    const location = useLocation();
    return (
        <div className={`SubHeader ${props.className || ""}`}>
            <div className="SubHeaderInner">
                {props.heading && <h3>{props.heading}:</h3>}
                {
                    props?.navigationLinks &&
                    <ul>
                        {
                            props?.navigationLinks.map(item => (
                                <li key={item.id}>
                                    <NavLink className={item?.alterLocation?.filter(item => item === location.pathname).length ? 'active' : ''} to={item?.to || ""}>{item.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default SubHeader
