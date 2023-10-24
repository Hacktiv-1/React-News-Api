import { createSlice } from "@reduxjs/toolkit";

const getBookmarkedNewsFromLocalStorage = () => {
  const storedData = localStorage.getItem("bookmarkedNews");
  return storedData ? JSON.parse(storedData) : [];
};

const initialState = {
  bookmarkedNews: getBookmarkedNewsFromLocalStorage(),
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addBookmarkedNews: (state, action) => {
      state.bookmarkedNews.push(action.payload);
      // Save to local storage after adding a bookmark
      localStorage.setItem("bookmarkedNews", JSON.stringify(state.bookmarkedNews));
    },
    removeBookmarkedNews: (state, action) => {
      state.bookmarkedNews = state.bookmarkedNews.filter(
        (news) => news.url !== action.payload
      );
      // Save to local storage after removing a bookmark
      localStorage.setItem("bookmarkedNews", JSON.stringify(state.bookmarkedNews));
    },
  },
});

export const { addBookmarkedNews, removeBookmarkedNews } = newsSlice.actions;
export default newsSlice.reducer;
