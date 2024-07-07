import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

const topIndiaNews = () => {
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopNews();
  }, []);
  const fetchTopNews = async () => {
    try {
      const data = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=" +
          API_KEY
      );
      const json = await data.json();

      setTopNews(json.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { topNews, loading };
};
export default topIndiaNews;
