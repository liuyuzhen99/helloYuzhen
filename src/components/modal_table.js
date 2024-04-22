import React from "react";
import Table from "./table";
import Modal from "./modal";
import { useState } from "react";

function Modal_Table() {

    const [modalOpen, setModalOpen] = useState(false);

    const [rows, setRows] = useState([
        { page: "Page 1", description: "this is first page", status: "live" },
        { page: "Page 2", description: "this is second page", status: "draft" },
        { page: "Page 3", description: "this is third page", status: "error" },
    ]);

    const [rowToEdit, setRowToEdit] = useState(null);

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    }

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null ?
            setRows([...rows, newRow]) :
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
                return newRow;
            }))
    }

    return (
        <div className="modal-table">
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <button className="btn" onClick={() => setModalOpen(true)}>Add</button>
            {modalOpen && <Modal closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
            }}
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && rows[rowToEdit]} />}
        </div>
    );
};

export default Modal_Table;