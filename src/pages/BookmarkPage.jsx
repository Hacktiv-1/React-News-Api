import React from "react";
import { useSelector } from "react-redux";

function BookmarkPage() {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div className="BookmarkPage p-6 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Bookmarked News</h2>
      {bookmarks.length === 0 ? (
        <p className="text-lg text-gray-600">No bookmarks yet.</p>
      ) : (
        <ul className="list-disc pl-4">
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
              <a
                href={bookmark}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {bookmark}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookmarkPage;
