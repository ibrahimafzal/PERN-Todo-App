import React, { useState } from 'react';
import axios from "axios"

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await axios.post("http://localhost:5000/todos", body)
            console.log("res :: ", response)
            setDescription("")
            window.location = "/"
        } catch (error) {
            console.log(error.message)
        }
    }



    return (
        <>
            <h1 className='text-center mt-5'>PERN Todo App</h1>

            <form className='d-flex mt-5 gap-1 align-items-center' onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className='form-control'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className='btn btn-success'>Add</button>
            </form>
        </>
    )
}

export default InputTodo