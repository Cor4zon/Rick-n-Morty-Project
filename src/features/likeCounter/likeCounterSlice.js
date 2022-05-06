import { createSlice } from '@reduxjs/toolkit'

const getInitialLikeCounter = () => {
    return JSON.parse(localStorage.getItem('favoriteCharacters'))?.length || 0;
}

export const likeCounterSlice = createSlice({
    name: 'likeCounter',
    initialState: {
        likes: getInitialLikeCounter()
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