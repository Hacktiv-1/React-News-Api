import React, { useEffect, useState } from "react";
import { apiKey } from "../utils/apiKey";
import Loading from "../components/loading/Loading";
import NewsList from "../components/news card/NewsList";
import NewsWrapper from "../components/news card/NewsWrapper";
import Title from "../components/text/Title";
import PageWrapper from "../components/wrapper/pagewrapper";
function HomePage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endpoint = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

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
      <Title>Indonesia News</Title>
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

export default HomePage;
