import React from "react";
import ReadMoreButton from "../buttons/ReadMoreButton";
import BookmarkButton from "../buttons/BookmarkButton";

function NewsItemActions({ url, onBookmark, isBookmarked }) {
  
  return (
    <>
      <div className="space-x-4">
        <ReadMoreButton url={url} />
        <BookmarkButton
          url={url}
          onBookmark={onBookmark}
          isBookmarked={isBookmarked}
        />
      </div>
    </>
  );  
}

export default NewsItemActions;
