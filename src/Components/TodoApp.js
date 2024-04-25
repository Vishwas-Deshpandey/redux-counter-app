import React, { useState } from 'react'
import { addTodo, DeleteTodo, ClearAllTodo } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const TodoApp = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todoReducer.todos)
    const [value, setValue] = useState('')
    return (
        <div style={{ marginTop: "12px" }}>
            <p>---------------------------------------------------------------------------------------------------------------------------------------</p>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Todo App</h1>
            <div style={{width: "38rem", height: "16rem", margin: 'auto', borderRadius: "4px", padding: '8px 30px', overflow: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                    <input type='text' name='todo' placeholder='add a new todo' style={{ padding: "10px", width: "100%" }} value={value} onChange={(e) => setValue(e.target.value)} />
                    <button style={{ padding: "10px", cursor: "pointer" }} onClick={(e) => { dispatch(addTodo(value)); setValue('') }}>✍</button>
                </div>

                {
                    todo.map((t) => (
                        <h1 style={{ backgroundColor: "indigo", cursor: 'pointer', margin: '8px 0', textAlign: "left", color: "silver", fontSize: "16px", padding: "5px" }} key={t.id} onClick={() => { dispatch(DeleteTodo(t.id)) }}>{t.data}</h1>
                    ))
                }
            </div>
                <button style={{ margin: '12px auto', padding: "8px", cursor:"pointer", backgroundColor:'indianred',color:'white'}} onClick={() => dispatch(ClearAllTodo())}>CLEAR ALL</button>
            <p>---------------------------------------------------------------------------------------------------------------------------------------</p>
        </div>
    )
}

export default TodoApp