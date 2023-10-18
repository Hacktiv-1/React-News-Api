import React from "react";
import { formatDateNews } from "../../utils/formatDateApi";

function NewsItemBody({ author, description, title, publishedAt, url }) {
  return (
    <>
      {author == null ? (
        <div>There is no author | {formatDateNews(publishedAt)}</div>
      ) : (
        <div>
          {author} | {formatDateNews(publishedAt)}
        </div>
      )}
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h1>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
        {description}
      </div>
    </>
  );
}

export default NewsItemBody;
