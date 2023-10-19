import React, { useEffect, useState } from "react";
import { apiKey } from "../utils/apiKey";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import Loading from "../components/loading/Loading";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";
function ProgrammingPage() {
  const keyword = "Programming";
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

export default ProgrammingPage;
