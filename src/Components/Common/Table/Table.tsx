import React, { ReactNode } from 'react';
import './Table.scss';
import { Table } from 'react-bootstrap';

type propTypes = {
    className?: string,
    children?: ReactNode,
    fields?: string[],
}

const CustomTable = (props: propTypes) => {
    const { className, children, fields } = props;
    return (
        <Table responsive className={`${className || ""} CustomTable`}>
            {
                fields &&
                <thead>
                    <tr>
                        {
                            fields.map(item => (
                                <th key={item}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
            }
            <tbody>
                {
                    children ||
                    <tr>
                        <td>No record Found</td>
                    </tr>
                }
            </tbody>
        </Table>
    )
}
export default CustomTable;
