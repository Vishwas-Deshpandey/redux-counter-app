import React from 'react'
import { toogleMode } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.changeMode.toogle)
    return (
        <nav style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", padding: "0 18px", backgroundColor: "black", color: 'aliceblue' }}>

            <h2>Redux Project</h2>

            <button style={{ padding: '5px', cursor: "pointer" }}
                onClick={() => dispatch(toogleMode())}
            >turn on {mode ? 'light' : 'dark'} mode</button>
        </nav>
    )
}

export default Navbar