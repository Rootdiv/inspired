import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    openSearch: false,
    search: '',
  },
  reducers: {
    toggleSearch(state) {
      state.openSearch = !state.openSearch;
    },
    searchQuery(state, action) {
      state.search = action.payload.search;
    },
  },
});

export const { toggleSearch, searchQuery } = searchSlice.actions;

export default searchSlice.reducer;
