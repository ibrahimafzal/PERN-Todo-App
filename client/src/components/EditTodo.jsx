import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '42%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "600px",
    },
};

const EditTodo = ({ todo, setTodos }) => {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState(todo.description);


    const openModal = () => setOpen(true);
    const closeModal = () => {
        setOpen(false)
        setDescription(todo.description)
    };

    // edit todo function
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await axios.put(`http://localhost:5000/todos/${todo.todo_id}`, body)
            setOpen(false)
            window.location = "/"
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div id='main'>
            <button type='button' className='btn btn-success' onClick={openModal}>Edit</button>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Edit Todo</h4>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="mt-3">
                    <input
                        type="text"
                        className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-end gap-2 mt-3">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => updateDescription(e)}>Save changes</button>
                </div>
            </Modal>
        </div>
    )
}

export default EditTodo