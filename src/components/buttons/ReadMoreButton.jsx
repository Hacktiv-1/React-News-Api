import React from "react";

function ReadMoreButton({ url }) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
      >
        Read more
      </a>
    </>
  );
}

export default ReadMoreButton;
