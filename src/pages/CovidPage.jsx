import React, { useEffect, useState } from "react";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import { apiKey } from "../utils/apiKey";
import Loading from "../components/loading/Loading";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";

function CovidPage() {
  const keyword = "covid";
  const [news, setNews] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const endpoint = getNewsEndpointForLastMonth(keyword, apiKey);

  const fetchData = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    setNews(data.articles);
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <NewsWrapper>
          <NewsList news={news} />
        </NewsWrapper>
      )}
    </>
  );
}

export default CovidPage;
