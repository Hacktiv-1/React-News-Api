import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../utils/apiKey";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import Loading from "../components/loading/Loading";
import NewsWrapper from "../components/news card/NewsWrapper";
import NewsList from "../components/news card/NewsList";

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
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Search for : {keyword}</h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NewsWrapper>
            <NewsList news={news} />
          </NewsWrapper>
        </>
      )}
    </>
  );
}

export default SearchPage;
