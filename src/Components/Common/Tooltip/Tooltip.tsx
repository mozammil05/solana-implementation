import React, { ReactNode } from 'react'
import { InfoIcon } from '../../../Assets/Images/Icons/SvgIcons'
import './Tooltip.scss';
import { OverlayTrigger, Tooltip as BTooltip } from 'react-bootstrap'

const Tooltip = (props: { icon?: ReactNode, children?: ReactNode, heading?: string, content?: string }) => {
    return (
        <>
            <OverlayTrigger
                placement="auto"
                overlay={
                    <BTooltip className='CommonTooltip' id="button-tooltip">
                        <>
                            {
                                props.children ||
                                <div>
                                    <h4>{props.heading}</h4>
                                    <p>{props.content}</p>
                                </div>
                            }
                        </>
                    </BTooltip>
                }
            >
                <span className='tooltip_btn'>{props.icon || <InfoIcon />}</span>
            </OverlayTrigger>
        </>
    )
}

export default Tooltip
