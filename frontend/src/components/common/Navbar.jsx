import React, { useEffect, useState } from "react";
import { Link, matchPath, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { IoClose } from "react-icons/io5"; // Close icon
import ProfileDropDown from "../Auth/ProfileDropDown";
import { logout } from "../../services/operations/authAPI";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const matchRoute = (value) => {
    return matchPath({ path: value }, location.pathname);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  
  const handlelogout = () => {
    dispatch(logout(navigate));
    toggleMobileMenu();
  };




  return (
    <>
      {/* Main Navbar for larger screens */}
      <div className="hidden md:flex h-20 items-center justify-center border-b-[1px] border-b-richblack-600">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          <Link to={"/"}>
            <h1 className="text-2xl text-white/80 font-edu-sa font-bold">
              PadhaiKro
            </h1>
          </Link>

          {/* Links and buttons for larger screens */}
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`${
                      matchRoute(link.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {user && user?.accountType !== "Instructor" && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token === null && (
              <>
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {token !== null && <ProfileDropDown />}
          </div>
        </div>
      </div>














      {/* Mobile Navbar for screens smaller than 740px */}
      <div className="flex md:hidden sticky w-full z-50">
        <div className="flex h-20 items-center justify-between px-4 border-b-[1px] border-b-richblack-600 w-full">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl text-richblue-100 font-inter font-bold">
              PadhaiKro
            </h1>
          </Link>

          {/* Menu button */}
          <button
            className="text-2xl text-richblack-100"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <IoClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 z-50 w-full bg-richblack-900 shadow-md">
            <ul className="flex flex-col gap-4 p-6">
              {/* Navbar links */}
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`block text-richblack-25 ${
                      matchRoute(link.path) ? "text-yellow-25" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              {/* Sign In, Sign Up, Dashboard */}
              {token === null && (
                <>
                  <li>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                        Log In
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                        Sign Up
                      </button>
                    </Link>
                  </li>
                </>
              )}
              {token !== null && (
                <>
                <li>
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                      Dashboard
                    </button>
                  </Link>
                </li>

                <li>
                <button onClick={handlelogout} className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100">
                      Logout
                    </button>
                </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
