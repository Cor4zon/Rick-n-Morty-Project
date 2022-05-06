import { createSlice } from '@reduxjs/toolkit'

const getInitialFavoriteCharacters = () => {
    return JSON.parse(localStorage.getItem('favoriteCharacters')) || [];
}

export const favoriteCharactersSlice = createSlice({
    name: 'favoriteCharacters',
    initialState: {
        characters: getInitialFavoriteCharacters()
    },
    reducers: {
        addFavoriteCharacter: (state, action) => {
            state.characters.push(action.payload);
        },
        removeFavoriteCharacter: (state, action) => {
            state.characters = state.characters.filter((character, id) => id !== action.payload);
        }
    }
})

export const { addFavoriteCharacter, removeFavoriteCharacter } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;