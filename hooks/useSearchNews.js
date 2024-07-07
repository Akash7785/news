import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

const useSearchNews = (searchedText) => {
  const [searchedNews, setSearchedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [searchedText]);

  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${searchedText}&pageSize=100&from=2024-06-26&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`
    );
    const json = await data.json();
    console.log(json.articles);
    setSearchedNews(json.articles);
    setLoading(false);
  };
  // console.log(searchedNews);
  return { searchedNews, loading };
};

export default useSearchNews;
