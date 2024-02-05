import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // state will give access to all the variables
        // action will give values like id
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// we need to export two parts of reducers

export const {addTodo, removeTodo} = todoSlice.actions // these are individual functionalites
// store also needs to be aware about all the reducers
// we need to register reducers to update values

export default todoSlice.reducer
