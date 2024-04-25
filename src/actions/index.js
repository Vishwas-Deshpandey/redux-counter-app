// we need to  create the action fist like when we click + button what to do like increment when click - we need to decrement like this.

export const incButton = () => {
    return{
        type:"INCREMENT",
    }
}

export const decButton = () => {
    return{
        type:"DECREMENT"
    }
}

export const resetButton = () => {
    return{
        type:"RESET"
    }
}


// todo actions
export const addTodo = (value) => {
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:value
        }
    }
}

export const DeleteTodo = (id) => {
    return {
        type:"DELETE_TODO",
        id:id
    }
}

export const ClearAllTodo = () => {
    return {
        type:"CLEAR_ALL_TODO"
    }
}

// light mode dark mode 
export const toogleMode = () => {
    return{
        type:"TOOGLE_MODE"
    }
}