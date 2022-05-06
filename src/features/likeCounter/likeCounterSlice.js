import { createSlice } from '@reduxjs/toolkit'

export const likeCounterSlice = createSlice({
    name: 'likeCounter',
    initialState: {
        likes: 0
    },
    reducers: {
        increment: state => {
            state.likes++
        },
        decrement: state => {
            state.likes--
        }
    }
})

export const { increment, decrement } = likeCounterSlice.actions
export default likeCounterSlice.reducer 