import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="shadow-2xl">
        <div className=" bg-[#002765] flex justify-center items-center mt-7 py-10 ">
          <div className="w-full justify-center items-center  flex gap-5 font-semibold">
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <FaInstagramSquare className="text-3xl rounded-full text-[#002765]" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <FaFacebookSquare className="text-3xl rounded-full text-[#002765]" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <FaWhatsappSquare className="text-3xl rounded-full text-[#002765]" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <FaYoutubeSquare className="text-3xl rounded-full text-[#002765]" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <FaSquareXTwitter className="text-3xl rounded-full text-[#002765]" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-center text-white bg-[#002765] p-2">
        copyright &copy; News
      </h1>
    </>
  );
};

export default Footer;
