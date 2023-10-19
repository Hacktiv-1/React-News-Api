import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './slices/bookmarksSlice';
import newsReducer from './slices/newsSlice';

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    news: newsReducer,
  },
});

export default store;
