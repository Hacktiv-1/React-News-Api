import React  from "react";
import NewsItemHead from "./NewsItemHead";
import NewsItemBody from "./NewsItemBody";
import NewsItemActions from "./NewsItemActions";
import { useDispatch, useSelector } from "react-redux";
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
  const getIsBookmark = useSelector((state) => state.news.bookmarkedNews);
  const isNewsBookmarked = getIsBookmark.some(
    (news) => news.url === url && news.isBookmarked
  );
  const onBookmarkHandler = () => {
    if (isNewsBookmarked) {
      // News is already saved, so remove it from bookmarks
      dispatch(removeBookmarkedNews(url));
    } else {
      // News is not saved, so add it to bookmarks
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
          isBookmarked: true,
        })
      );
    }
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
            isBookmarked={isNewsBookmarked}
          />
        </div>
      </div>
    </>
  );
}

export default NewsItem;
