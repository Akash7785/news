import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

const useCategoryNews = (category) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
    );
    const json = await data.json();

    console.log("top categories", json);
    setSelectedCategory(json.articles);
    setLoading(false);
  };
  return { selectedCategory, loading };
};
export default useCategoryNews;
