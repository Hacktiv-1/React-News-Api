import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils/apiKey";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import Loading from "../components/loading/Loading";
import NewsWrapper from "../components/news card/NewsWrapper";
import NewsList from "../components/news card/NewsList";
import PageWrapper from "../components/wrapper/pagewrapper";
import Title from "../components/text/Title";

function SearchPage() {
  let { keyword } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endpoint = getNewsEndpointForLastMonth(keyword, apiKey);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [keyword]);

  return (
    <>
     <PageWrapper>
       <Title>Pencarian untuk : {keyword}</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {news.length === 0 ? (
            <div className="text-center flex items-center justify-center my-32 font-semibold">
              There is no result
            </div>
          ) : (
            <NewsWrapper>
              <NewsList news={news} />
            </NewsWrapper>
          )}
        </>
      )}
      </PageWrapper>
    </>
  );
}

export default SearchPage;
