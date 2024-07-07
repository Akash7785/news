import React, { useState } from "react";

const PageNo = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <div className="flex justify-center gap-1 mt-5 cursor-pointer font-semibold">
        <span className="bg-gray-200 px-4 rounded-md py-2">Prev</span>
        {[
          ...Array(10)
            .keys()
            .map((pN) => (
              <span key={pN} className="bg-gray-200 px-4 rounded-md py-2">
                {pN + 1}
              </span>
            )),
        ]}
        <span className="bg-gray-200 px-4 rounded-md py-2">Next</span>
      </div>
    </div>
  );
};

export default PageNo;
