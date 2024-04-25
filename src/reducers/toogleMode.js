const initialState = {
    toogle:false
}


const changeMode = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_MODE':
            return {
                ...state,
                toogle:!state.toogle
            }
        default:
            return state;
    }
}

export default changeMode;