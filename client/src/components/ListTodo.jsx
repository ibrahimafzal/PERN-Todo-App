import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

    const [todos, setTodos] = useState([]);


    // GET Todos //
    const getTodo = async () => {
        try {
            const response = await axios.get("http://localhost:5000/todos");
            setTodos(response?.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTodo();
    }, []);


    // DELETE Todos //
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await axios.delete(`http://localhost:5000/todos/${id}`);
            console.log("delete todo :: ", deleteTodo);
            setTodos(todos.filter((t) => t.todo_id !== id));
        } catch (error) {
            console.log(error.message);
        };
    };


    // Edit Todos //



    return (
        <>
            <table className="table table-striped table-hover mt-5 text-start" >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map((todo) => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td>
                                    <EditTodo todo={todo} setTodos={setTodos}/>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListTodo