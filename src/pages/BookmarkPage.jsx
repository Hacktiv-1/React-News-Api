import React from "react";
import { useSelector } from "react-redux";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";
import Title from "../components/text/Title";
import PageWrapper from "../components/wrapper/pagewrapper";
function BookmarkPage() {
  // Updated to use the news reducer for bookmarked news
  const bookmarkedNews = useSelector((state) => state.news.bookmarkedNews);

  // Reverse the order of bookmarkedNews
  const reversedBookmarkedNews = [...bookmarkedNews].reverse();

  return (
   <PageWrapper>
      <Title>Bookmarked News</Title>
      {bookmarkedNews.length === 0 ? (
        <div className="text-center flex items-center justify-center my-32 font-semibold">
          Ooops,Belum ada berita yang disimpan
        </div>
      ) : (
        <NewsWrapper>
          <NewsList news={reversedBookmarkedNews} />
        </NewsWrapper>
      )}
      </PageWrapper>
  );
}

export default BookmarkPage;
