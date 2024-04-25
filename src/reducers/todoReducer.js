const intitialState = {
    todos: []
}

const todoReducer = (state = intitialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case 'DELETE_TODO':
            const updatedTodo = state.todos.filter((curr) => curr.id !== action.id)

            return {
                ...state,
                todos: updatedTodo
            }

        case 'CLEAR_ALL_TODO':
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}

export default todoReducer;