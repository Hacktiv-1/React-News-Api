import React, { useState } from "react";
import NewsList from "./NewsList";

function NewsApp({ news }) {
  const [isBookmarked, setIsBookmarked] = useState();

  const onBookmarkHandler = (url) => {
    news.map((n) => {
      if (n.url === url) {
        setIsBookmarked(!isBookmarked);
        console.log(url);
      }
    });
  };
  return (
    <>
      <NewsList
        news={news}
        onBookmark={onBookmarkHandler}
        isBookmarked={isBookmarked}
      />
    </>
  );
}

export default NewsApp;
