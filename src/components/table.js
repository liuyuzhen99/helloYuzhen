import React from "react";

import "./table.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Table({ rows, deleteRow, editRow }) {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Page</th>
                        <th className="expand">Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            const statusText = row.status.CharAt(0).toUpperCase() + row.status.slice(1);


                            return <tr key={idx}>
                                <td>{rows.page}</td>
                                <td className="expand">{rows.description}</td>
                                <td>
                                    <span className={`label label-${rows.status}`}>
                                        {statusText}
                                    </span>
                                </td>
                                <td>
                                    <span className="actions">
                                        <BsFillTrashFill className="delete-btn" onClick={() => { deleteRow(idx) }} />
                                        <BsFillPencilFill onClick={() => editRow(idx)} />
                                    </span>
                                </td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;