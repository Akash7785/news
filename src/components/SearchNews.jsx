import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSearchNews from "../../hooks/useSearchNews";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const SearchNews = () => {
  const { searchText } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const { searchedNews, loading } = useSearchNews(searchText);
  const filteredNews = searchedNews.filter((news) => {
    return news.urlToImage != null;
  });
  const data = filteredNews.slice(skip, limit);

  const handlePageChange = (pN) => {
    setCurrentPage(pN);
    setSkip(pN * 10);
    setLimit(pN * 10 + 10);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data]);

  if (!searchedNews) return null;

  return (
    <>
      <div className="flex ">
        <div className="w-1/2 m-auto p-2 max-sm:w-full max-sm:px-5">
          <h1 className="text-2xl mt-2 font-bold">Latest {searchText} News</h1>
          <div className="flex flex-wrap ">
            {loading ? (
              <Shimmer />
            ) : (
              data.map((news, i) => (
                <NewsCard
                  key={i}
                  url={news?.url}
                  title={news?.title}
                  image={news?.urlToImage}
                  desc={news?.description}
                  publishedAt={news?.publishedAt}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-1 mt-5 cursor-pointer font-semibold max-sm:flex-wrap ">
          {currentPage > 0 && (
            <span
              className="bg-gray-200 px-4 rounded-md py-2"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </span>
          )}
          {[
            ...Array(10)
              .keys()
              .map((pN) => (
                <span
                  key={pN}
                  className={
                    "bg-gray-200 px-4 rounded-md py-2 text-center  max-sm:flex max-sm:flex-wrap" +
                    (pN === currentPage && "font-bold bg-gray-400")
                  }
                  onClick={() => handlePageChange(pN)}
                >
                  {pN + 1}
                </span>
              )),
          ]}
          {currentPage < 9 && (
            <span
              className="bg-gray-200 px-4 rounded-md py-2"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchNews;
