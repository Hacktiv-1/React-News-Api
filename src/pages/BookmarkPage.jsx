import React from "react";
import { useSelector } from "react-redux";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";

function BookmarkPage() {
  // Updated to use the news reducer for bookmarked news
  const bookmarkedNews = useSelector((state) => state.news.bookmarkedNews);

  return (
    <div className="container mx-auto">
      <h2>Daftar Bookmark:</h2>
      {bookmarkedNews.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <p>No bookmarks yet.</p>
        </div>
      ) : (
        <NewsWrapper>
          <NewsList news={bookmarkedNews} />
        </NewsWrapper>
      )}
    </div>
  );
}

export default BookmarkPage;
