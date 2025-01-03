import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">


      <div className="w-11/12 mx-auto flex justify-center items-center  gap-10 text-richblack-400 my-20 flex-col">
      <div>   
              <h1 className="font-edu-sa font-bold text-4xl text-white/80">PadhaiKro</h1>
              </div>
              <div className="flex flex-col gap-2">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
                {["About", "Contact", "Carrers"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white text-center font-bold">GET IN TOUCH</h1>
               <h1 className="hover:text-white/60 transition-all duration-200 text-xl font-semibold">kropadhai1@gmail.com</h1>
              </div>
      </div>
     

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto text-sm border-t border-richblack-500 my-10">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full my-10">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">© 2024 Padhai Kro</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;