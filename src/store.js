import { configureStore } from '@reduxjs/toolkit';
import likeCounterReducer from './features/likeCounter/likeCounterSlice';
import favoriteCharactersReducer from './features/favoriteCharacters/favoriteCharactersSlice'
import selectedCharactersReducer from './features/selectedCharacters/selectedCharactersSlice';

export default configureStore({
    reducer: {
        likeCounter: likeCounterReducer,
        favoriteCharacters: favoriteCharactersReducer,
        selectedCharacters: selectedCharactersReducer,
    }
})
