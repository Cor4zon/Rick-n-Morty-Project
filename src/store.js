import { configureStore } from '@reduxjs/toolkit';
import likeCounterReducer from './features/likeCounter/likeCounterSlice';

export default configureStore({
    reducer: {
        likeCounter: likeCounterReducer
    }
})