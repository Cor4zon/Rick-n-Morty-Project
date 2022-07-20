import { createSlice } from '@reduxjs/toolkit'

const getInitialSelectedCharacters = () => {
    return JSON.parse(localStorage.getItem('selectedCharacters')) || [];
}

export const selectedCharactersSlice = createSlice({
    name: "selectedCharacters",
    initialState: {
        selectedCharacters: getInitialSelectedCharacters(),
        characterType: null,
        nextPage: null,
        prevPage: null,
    },
    reducers: {
        addSelectedCharacters: (state, action) => {
            state.selectedCharacters = [...action.payload];
        },
        removeSelectedCharacters: (state, action) => {
            state.selectedCharacters = state.selectedCharacters.filter((character, id) => id !== action.payload);
        },
        setNextPage: (state, action) => {
            state.nextPage = action.payload;
        },
        setPrevPage: (state, action) => {
            state.prevPage = action.payload;
        },
        setCharacterType: (state, action) => {
            state.characterType = action.payload;
        },
    }
})

export const {addSelectedCharacters, removeSelectedCharacters, setNextPage, setPrevPage, setCharacterType} = selectedCharactersSlice.actions;
export default selectedCharactersSlice.reducer;
