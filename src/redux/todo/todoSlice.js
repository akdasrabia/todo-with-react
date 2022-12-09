import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: nanoid(),
                task: 'Learn HTML',
                status: 'todo'
            },
            {
                id: nanoid(),
                task: 'Clean my room',
                status: 'doing'
            },
            {
                id: nanoid(),
                task: 'Buy some new stationary',
                status: 'done'
            },
            {
                id: nanoid(),
                task: 'Do grocery shopping',
                status: 'todo'
            },
            {
                id: nanoid(),
                task: 'Read the red book',
                status: 'doing'
            },
            {
                id: nanoid(),
                task: 'Learn JavaScript',
                status: 'done'
            },
            {
                id: nanoid(),
                task: 'Read the tutorial',
                status: 'todo'
            },
            {
                id: nanoid(),
                task: 'Code review',
                status: 'doing'
            },
            {
                id: nanoid(),
                task: 'Clean the kitchen',
                status: 'done'
            },
            {
                id: nanoid(),
                task: 'Change cat litter',
                status: 'todo'
            },
            {
                id: nanoid(),
                task: 'Take a walk',
                status: 'doing'
            },
            {
                id: nanoid(),
                task: 'Call my parents',
                status: 'done'
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            state.items.push(action.payload)
        },
        changeStatus: (state, action) => {
            const {id, newStatus} = action.payload
            const item = state.items.find(item => item.id == id)
            item.status = newStatus
        },
    }
})

export const selectTodos = state => state.todos.items

export const {addTodo, changeStatus} = todoSlice.actions
export default todoSlice.reducer