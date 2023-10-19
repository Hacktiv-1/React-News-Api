// bookmarksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    toggleBookmark: (state, action) => {
      const newsUrl = action.payload;

      // Check if the news URL is already in bookmarks
      const index = state.indexOf(newsUrl);

      // If it's already bookmarked, remove it; otherwise, add it
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(newsUrl);
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
