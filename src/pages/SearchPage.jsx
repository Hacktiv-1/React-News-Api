import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils/apiKey";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import Loading from "../components/loading/Loading";
import NewsWrapper from "../components/news card/NewsWrapper";
import NewsList from "../components/news card/NewsList";
import Title from "../components/text/Title";
import PageWrapper from "../components/wrapper/PageWrapper";
import Description from "../components/text/Description";

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
            <Description>Oops, tidak ada hasil pencarian</Description>
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
