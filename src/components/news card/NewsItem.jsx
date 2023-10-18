import React from "react";
import NewsItemHead from "./NewsItemHead";
import NewsItemBody from "./NewsItemBody";
import NewsItemActions from "./NewsItemActions";

function NewsItem({
  author,
  content,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
  source,
  onBookmark,
  isBookmarked
}) {
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
          <NewsItemActions url={url} onBookmark={onBookmark} isBookmarked={isBookmarked}/>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
