import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('Inspired-favorites') || '[]');

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const id = action.payload.id;
      if (!state.includes(id)) {
        state.push(id);
      }
      localStorage.setItem('Inspired-favorites', JSON.stringify(state));
    },

    removeFromFavorites(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('Inspired-favorites', JSON.stringify(state));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
