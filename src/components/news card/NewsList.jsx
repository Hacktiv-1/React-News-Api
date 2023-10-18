import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ news, onBookmark, isBookmarked }) {
  return (
    <>
      {news.map((news, index) => (
        <NewsItem
          key={index}
          {...news}
          onBookmark={onBookmark}
          isBookmarked={isBookmarked}
        />
      ))}
    </>
  );
}

export default NewsList;
