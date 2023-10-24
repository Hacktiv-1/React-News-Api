import React, { useEffect, useState } from "react";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import { apiKey } from "../utils/apiKey";
import Loading from "../components/loading/Loading";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";
import Title from "../components/text/Title";
import PageWrapper from "../components/wrapper/PageWrapper";

function CovidPage() {
  const keyword = "covid";
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
  }, []);

  return (
    <>
    <PageWrapper>
    <Title>Covid News</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <NewsWrapper>
          <NewsList news={news} />
        </NewsWrapper>
      )}
      </PageWrapper>
    </>
    
  );
}

export default CovidPage;
