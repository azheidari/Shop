import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Action from "../../redux/action/product-action";
import * as CartAction from "../../redux/action/cart-action";
import { FaBeer } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const ProductDetail = () => {
  const param = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const cartItem = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartAction.addItemtoCart(item, amount));
  };

  const ProductItems = async () => {
    dispatch(Action.emptyResultShow());
    await dispatch(Action.getInProduct(param.id));
  };

  useEffect(() => {
    ProductItems();
  }, []);

  return (
    <>
      {/* <div className="pt-10">
      <article className="flex justify-center px-16">
        <div className=" ">
          <img
            className="px-5 w-52 h-52 m-auto  py-5 align-middle "
            src={product.image}
            alt="imag"
          />
          <div className="flex justify-center pr-2 pt-16">
            <div className="flex">
              <img
                style={{ with: "50px", height: "50px" }}
                src={product.image}
                alt="imag"
                className=" m-3"
              />
              <img
                style={{ with: "50px", height: "50px" }}
                src={product.image}
                alt="imag"
                className=" m-3"
              />
              <img
                style={{ with: "50px", height: "50px" }}
                src={product.image}
                alt="imag"
                className=" m-3"
              />
              <img
                style={{ with: "50px", height: "50px" }}
                src={product.image}
                alt="imag"
                className=" m-3"
              />
            </div>
          </div>
        </div>

        <div className=" p-10 ml-16">
          <h3 className="font-bold text-lg">{product.title}</h3>
          <h4 className="py-3">${product.price}</h4>
          <div className="flex my-3">
            <IoIosStar className="text-blue-300" />
            <IoIosStar className="text-blue-300" />
            <IoIosStar className="text-blue-300" />
            <IoIosStar className="text-blue-300" />
          </div>
          <p>{product.description}</p>
          <div className="mt-3">
            <div>color</div>
          </div>
          <div className="flex">
            <div className="w-5 h-5 rounded-full bg-black mr-2 border hover:border-red-800 hover:border-2" />
            <div className="w-5 h-5 rounded-full bg-gray-300 mr-2 border hover:border-red-800 hover:border-2" />
            <div className="w-5 h-5 rounded-full bg-blue-300 mr-2 border hover:border-red-800 hover:border-2" />
          </div>

          <button
            onClick={() => cartItem(product)}
            className="px-16 py-2 my-5 rounded bg-blue-800 text-white"
          >
            Add to bag
          </button>
        </div>
      </article>
    </div> */}

      <div class="py-10 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-96">
                  <Link
                    class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </Link>
                  <img
                    class="object-contain w-full lg:h-full"
                    src={product.image}
                    alt=""
                  />
                  <Link
                    class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div class="flex-wrap hidden -mx-2 md:flex">
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <Link
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src={product.image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <Link
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src={product.image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <Link
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src={product.image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <Link
                      class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                      href="#"
                    >
                      <img
                        class="object-contain w-full lg:h-28"
                        src={product.image}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                    New Arrival
                  </span>
                  <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {product.title}
                  </h2>
                  <div class="flex flex-wrap items-center mb-6">
                    <ul class="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      class="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                      href="#"
                    >
                      View the acer store
                    </Link>
                  </div>
                  <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>${product.price}</span>
                    <span class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      Rs.10,000.00
                    </span>
                  </p>
                </div>

                <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span class="text-base text-gray-600 dark:text-gray-400">
                    In Stock
                  </span>
                  <p class="mt-2 text-sm text-blue-500 dark:text-blue-200">
                    Ships from china.
                    <span class="text-gray-600 dark:text-gray-400">
                      Most customers receive within 3-31 days.
                    </span>
                  </p>
                </div>
                <div class="mb-6 "></div>
                <div class="flex flex-wrap items-center mb-6">
                  <div class="mb-4 mr-4 lg:mb-0">
                    <div class="w-28">
                      <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                          <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                          placeholder="1"
                        />
                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 lg:mb-0">
                    <button class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class=" bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                      </svg>
                    </button>
                  </div>
                  <Link
                    onClick={() => cartItem(product)}
                    href="#"
                    class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                  >
                    Add to cart
                  </Link>
                </div>
                <div class="flex gap-4 mb-6">
                  <Link
                    href="#"
                    class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
