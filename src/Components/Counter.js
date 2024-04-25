import React from 'react'
// to fetch the state value we use useSelector and for state change we need useDispatch
import { useDispatch, useSelector } from 'react-redux';
import { incButton, decButton,resetButton } from '../actions';
const Counter = () => {

    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <>
            <h1 style={{ margin: "2rem auto", color: "indigo" }}>Increment/Decrement Counter using redux</h1>

            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', gap: "5px" }}>

                <button style={{ padding: '18px' }} onClick={() => dispatch(decButton())}>-</button>
                <input type="text" name='value' value={myState} style={{ padding: "18px", width: "50px", textAlign: 'center', fontSize: "22px" }} />
                <button style={{ padding: '18px' }} onClick={() => dispatch(incButton())}>+</button>

            </div>

            <button onClick={() => dispatch(resetButton())}>RESET COUNT</button>
        </>
    )
}

export default Counter