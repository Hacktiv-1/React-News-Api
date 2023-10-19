import React from "react";
import NewsItem from "./NewsItem";

function NewsList({ news }) {
  return (
    <>
      {news.map((news, index) => (
        <NewsItem
          key={index}
          {...news}
        />
      ))}
    </>
  );
}

export default NewsList;
