import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Cart from "../components/cart/Cart";
import Authentication from "../pages/authe/Authentication";
import LogIn from "../pages/authe/login";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./../asset/unnamed.jpg";


const MainNavigation = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showAuthentication = () => {
    setSignUp(true);
  };

  const hideAuthentication = () => {
    setSignUp(false);
  };

  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
  };

  return (
    <header>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {signUp && <LogIn onClose={hideAuthentication} />}
      <nav className="flex justify-between px-10 py-5 bg-black text-white">
        <ul className="flex flex-wrap items-center    dark:text-white">
          <li className="me-4 hover:border-b-2  transition duration-300 pb-3 border-black hover:border-b-gray-200 border md:me-6  ">
            <Link to="/" end>
              All Products
            </Link>
          </li>
          <li className="me-4 hover:border-b-2 transition duration-300 pb-3 hover:border-b-gray-200 border-black border md:me-6  ">
            <Link to="electronics" end>
              Electronics
            </Link>
          </li>
          <li className="me-4 hover:border-b-2 transition duration-300 pb-3 hover:border-b-gray-200 border-black border md:me-6  ">
            <Link to="men's clothing" end>
              Men clothing
            </Link>
          </li>
          <li className="me-4 hover:border-b-2 transition duration-300 pb-3 hover:border-b-gray-200 border-black border md:me-6  ">
            <Link to="women'sclothing" end>
              Women clothing
            </Link>
          </li>
          <li className="me-4 hover:border-b-2 transition duration-300 pb-3 hover:border-b-gray-200 border-black border md:me-6  ">
            <Link to="jewelery" end>
              Jewelery
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <Header />
          <svg
            className="w-4 h-4 text-white dark:text-white mx-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 18"
          >
            <path
              onClick={showAuthentication}
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
            />
          </svg>
          <svg
            className="w-4 h-4 text-white dark:text-white mx-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              onClick={showCartHandler}
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
            />
          </svg>
          <svg
            className="w-4 h-4 text-white dark:text-white mx-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 19"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
            />
          </svg>
        </div>
      </nav>

      <div className="border border-gray rounded m-5 ">
        <Slider {...settings}>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
          <div className=" rounded-lg ">
            <img
              className="rounded items-center m-auto my-2"
              src={image}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </header>
  );
};

export default MainNavigation;
