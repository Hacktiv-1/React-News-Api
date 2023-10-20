import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedNews: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addBookmarkedNews: (state, action) => {
      state.bookmarkedNews.push(action.payload);
    },
    removeBookmarkedNews: (state, action) => {
      state.bookmarkedNews = state.bookmarkedNews.filter(
        (news) => news.url !== action.payload
      );
    },
    
  },
});

export const { addBookmarkedNews, removeBookmarkedNews } = newsSlice.actions;
export default newsSlice.reducer;
