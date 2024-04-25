// we will create a reducer which perform the counter funtion to work and how it work

const initialState = 0;


const changeTheNumber = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT":
            return state + 5
        case "DECREMENT":
            return state - 1
        case "RESET":
            return state = initialState
       
        default:
            return state
    }
}

export default changeTheNumber;