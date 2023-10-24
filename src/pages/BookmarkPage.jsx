import React from "react";
import { useSelector } from "react-redux";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";

function BookmarkPage() {
  // Updated to use the news reducer for bookmarked news
  const bookmarkedNews = useSelector((state) => state.news.bookmarkedNews);

  // Reverse the order of bookmarkedNews
  const reversedBookmarkedNews = [...bookmarkedNews].reverse();

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-semibold p-4">Daftar Bookmark:</h1>
      {bookmarkedNews.length === 0 ? (
        <div className="text-center flex items-center justify-center my-32 font-semibold">
          Ooops,Belum ada berita yang disimpan
        </div>
      ) : (
        <NewsWrapper>
          <NewsList news={reversedBookmarkedNews} />
        </NewsWrapper>
      )}
    </div>
  );
}

export default BookmarkPage;
