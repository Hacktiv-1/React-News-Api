import React, { useEffect, useState } from "react";
import { getNewsEndpointForLastMonth } from "../utils/formatDateApi";
import { apiKey } from "../utils/apiKey";
import NewsApp from "../components/news card/NewsApp";
import Loading from "../components/loading/Loading";

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
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <NewsApp news={news} />
          </div>
        </>
      )}
    </>
  );
}

export default CovidPage;
