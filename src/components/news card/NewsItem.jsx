import React, { useState } from "react";
import NewsItemHead from "./NewsItemHead";
import NewsItemBody from "./NewsItemBody";
import NewsItemActions from "./NewsItemActions";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../../store/slices/bookmarksSlice";
import {
  addBookmarkedNews,
  removeBookmarkedNews,
} from "../../store/slices/newsSlice";

function NewsItem({
  author,
  content,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
  source,
}) {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state) => state.bookmarks.includes(url));

  const onBookmarkHandler = () => {
    if (isBookmarked) {
      // If already bookmarked, remove from the store
      dispatch(removeBookmarkedNews(url));
    } else {
      // If not bookmarked, add to the store
      dispatch(
        addBookmarkedNews({
          author,
          content,
          description,
          publishedAt,
          title,
          url,
          urlToImage,
          source,
        })
      );
    }

    // Toggle bookmark
    dispatch(toggleBookmark(url));
  };
  return (
    <>
      <div className="m-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-white flex flex-col justify-between overflow-hidden">
        <div className="h-1/2">
          <NewsItemHead urlToImage={urlToImage} />
        </div>

        <div className="p-5 flex flex-col justify-between ">
          <NewsItemBody
            author={author}
            publishedAt={publishedAt}
            description={description}
            title={title}
            url={url}
          />
          <NewsItemActions
            url={url}
            onBookmark={onBookmarkHandler}
            isBookmarked={isBookmarked}
          />
        </div>
      </div>
    </>
  );
}

export default NewsItem;
