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
            return {
                ...state,
                likes: state.likes + 1
            };
            
        },
        decrement: state => {
            return {
                ...state,
                likes: state.likes - 1
            }
        }
    }
})

export const { increment, decrement } = likeCounterSlice.actions
export default likeCounterSlice.reducer 