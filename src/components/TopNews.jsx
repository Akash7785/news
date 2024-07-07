import React, { useState } from "react";
import NewsCard from "./NewsCard";
import topIndiaNews from "../../hooks/topNews";
import Shimmer from "./Shimmer";

const TopNews = () => {
  const { topNews, loading } = topIndiaNews();

  const filteredNews = topNews.filter((news) => {
    return news.urlToImage != null;
  });

  console.log("topNews", topNews);
  if (!topNews) return null;
  return (
    <>
      <div className="flex flex-wrap">
        {loading ? (
          <Shimmer />
        ) : (
          filteredNews.map((news) => (
            <NewsCard
              key={news?.publishedAt}
              url={news?.url}
              title={news?.title}
              image={news?.urlToImage}
              desc={news?.description}
              publishedAt={news?.publishedAt}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TopNews;
