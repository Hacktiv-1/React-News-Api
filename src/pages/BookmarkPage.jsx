import React from "react";
import { useSelector } from "react-redux";


function BookmarkPage() {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div>
      <h2>Bookmarked News</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <ul>
          {bookmarks.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Bookmarked News {index + 1}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookmarkPage;
