import React from "react";
import ReadMoreButton from "../buttons/ReadMoreButton";
import BookmarkButton from "../buttons/BookmarkButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../../store/slices/bookmarksSlice";

function NewsItemActions({ url }) {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state) => state.bookmarks.includes(url));

  const onBookmarkHandler = () => {
    dispatch(toggleBookmark(url));
  };
  return (
    <>
      <div className="space-x-4">
        <ReadMoreButton url={url} />
        <BookmarkButton
          url={url}
          onBookmark={onBookmarkHandler}
          isBookmarked={isBookmarked}
        />
      </div>
    </>
  );
}

export default NewsItemActions;
