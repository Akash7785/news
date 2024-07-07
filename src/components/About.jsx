import React from "react";
import { useParams } from "react-router-dom";
import gif from "../assets/People watching the news.gif";
import gif2 from "../assets/News.gif";

const About = () => {
  return (
    <>
      <div className="flex max-sm:flex-col">
        <div className="w-full px-5">
          <img className="w-96" src={gif} alt="" />
        </div>
        <div className="py-5 max-sm:py-2 ">
          <h1 className="text-2xl w-1/2 font-bold max-sm:text-center max-sm:w-full">
            About Us
          </h1>
          <p className="pr-40 text-justify tracking-tighter mt-2 max-sm:px-10">
            Zee Media Corporation Limited formerly Zee News Ltd. was founded by
            Essel Group. and it was incorporated on 27 August 1999 as Zee Sports
            Ltd. it was a subsidiary of the Zee Telefilms Ltd later renamed to
            Zee Entertainment Enterprises.The company was reincorporated on 27
            May 2004, as Zee News Ltd It was demerged as a separate company of
            the Essel Group in 2006. In 2013, Zee News Ltd changed its name to
            Zee Media Corporation Limited.
          </p>
          <p className="pr-40 text-justify tracking-tighter mt-2 max-sm:px-10">
            The chairman of the group is Subhash Chandra, who is a Bharatiya
            Janata Party-backed member of the Rajya Sabha. The channel was tried
            for allegedly extorting ₹1 billion from the Jindal Group revealed
            through a sting operation.Two senior journalists Sudhir Chaudhary
            and Sameer Ahluwalia were arrested. The two were sent to 14-day
            judicial custody in Tihar jail and were ultimately released on bail.
          </p>
          <p className="pr-40 text-justify tracking-tighter mt-2 max-sm:px-10">
            The chairman of the group is Subhash Chandra, who is a Bharatiya
            Janata Party-backed member of the Rajya Sabha. The channel was tried
            for allegedly extorting ₹1 billion from the Jindal Group revealed
            through a sting operation.Two senior journalists Sudhir Chaudhary
            and Sameer Ahluwalia were arrested. The two were sent to 14-day
            judicial custody in Tihar jail and were ultimately released on bail.
          </p>
        </div>
      </div>

      {/* box2 */}

      <div className="flex max-sm:flex-col-reverse max-sm:py-1">
        <div className="p-20 max-sm:px-10 max-sm:py-2">
          <p className=" text-justify tracking-tighter mt-2">
            Zee Media Corporation Limited formerly Zee News Ltd. was founded by
            Essel Group. and it was incorporated on 27 August 1999 as Zee Sports
            Ltd. it was a subsidiary of the Zee Telefilms Ltd later renamed to
            Zee Entertainment Enterprises.The company was reincorporated on 27
            May 2004, as Zee News Ltd It was demerged as a separate company of
            the Essel Group in 2006. In 2013, Zee News Ltd changed its name to
            Zee Media Corporation Limited.
          </p>
          <p className=" text-justify tracking-tighter mt-2">
            The chairman of the group is Subhash Chandra, who is a Bharatiya
            Janata Party-backed member of the Rajya Sabha. The channel was tried
            for allegedly extorting ₹1 billion from the Jindal Group revealed
            through a sting operation.Two senior journalists Sudhir Chaudhary
            and Sameer Ahluwalia were arrested. The two were sent to 14-day
            judicial custody in Tihar jail and were ultimately released on bail.
          </p>
          <p className=" text-justify tracking-tighter mt-2">
            The chairman of the group is Subhash Chandra, who is a Bharatiya
            Janata Party-backed member of the Rajya Sabha. The channel was tried
            for allegedly extorting ₹1 billion from the Jindal Group revealed
            through a sting operation.Two senior journalists Sudhir Chaudhary
            and Sameer Ahluwalia were arrested. The two were sent to 14-day
            judicial custody in Tihar jail and were ultimately released on bail.
          </p>
        </div>
        <div className="w-full px-5">
          <img className="w-96" src={gif2} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
