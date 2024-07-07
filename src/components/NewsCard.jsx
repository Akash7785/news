import React from "react";

const NewsCard = ({ title, desc, publishedAt, image, url }) => {
  return (
    <div className="p-2 w-1/2 cursor-pointer shadow-md hover:shadow-lg mt-5 max-sm:w-full max-sm:p-2">
      <a href={url} target="blank">
        <div className="flex justify-center ">
          <img
            className=" min-h-56 max-h-56 object-cover "
            src={image}
            alt="poster"
          />
        </div>
        <h1 className="text-lg line-clamp-2 tracking-tighter py-2 font-semibold">
          {title}
        </h1>
        <p className="text-sm pb-2">{desc}</p>
        <p>{publishedAt}</p>
      </a>
    </div>
  );
};

export default NewsCard;
