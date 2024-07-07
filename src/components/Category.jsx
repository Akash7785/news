import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useCategoryNews from "../../hooks/useCategoryNews";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const Category = () => {
  const { category } = useParams();

  const { selectedCategory, loading } = useCategoryNews(category);
  console.log("selectedCategory", selectedCategory);
  console.log(category);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [category]);

  const filteredNews = selectedCategory.filter((news) => {
    return news.urlToImage != null;
  });

  if (!selectedCategory) return null;

  return (
    <div className="w-1/2 m-auto p-2 max-sm:w-full max-sm:px-5">
      <h1 className="text-2xl mt-2 font-bold max-sm:text-xl">
        Top {category} News
      </h1>
      <div className="flex flex-wrap ">
        {loading ? (
          <Shimmer />
        ) : (
          filteredNews.map((news, i) => (
            <NewsCard
              key={i}
              title={news?.title}
              image={news?.urlToImage}
              desc={news?.description}
              publishedAt={news?.publishedAt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
