import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    toggleBookmark: (state, action) => {
      const index = state.findIndex((item) => item === action.payload);
      if (index !== -1) {
        // If already bookmarked, remove it
        state.splice(index, 1);
      } else {
        // If not bookmarked, add it
        state.push(action.payload);
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
