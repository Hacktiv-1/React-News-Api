import React from "react";

function BookmarkButton({ url, onBookmark, isBookmarked }) {
  return (
    <>
      <button
        className={`"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${isBookmarked ? "bg-orange-700" : "bg-orange-500"} rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"`}
        onClick={() => onBookmark(url)}
      >
        {isBookmarked ? "Bookmarked 👍" : "Bookmark"}
      </button>
    </>
  );
}

export default BookmarkButton;
