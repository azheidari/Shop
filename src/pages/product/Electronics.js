import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Action from "../../redux/action/product-action";

const Electronics = () => {
  const dispatch = useDispatch();

  // const param = useParams();
  const navigate = useNavigate();
  // const category = param.electronics;

  const electronics = "electronics";

  let { products } = useSelector((state) => state.product);

  const productsItem = products.filter((item) => item.category === electronics);

  const getAllProductss = async () => {
    await dispatch(Action.getAllProducts());
  };

  useEffect(() => {
    getAllProductss();
  }, []);


  return (
    <div>
      <div className="flex justify-center flex-wrap ">
        {productsItem &&
          productsItem.map((item, index) => (
            <div
              data-aos="fade-down"
              className=" max-w-sm m-1 relative  transition duration-300 mx-5 bg-white items-center  border border-gray-200  rounded-lg  dark:bg-gray-800 dark:border-gray-700"
            >
              <Link
                key={index.toString()}
                to={item.id.toString()}
              >
                <img
                  className="rounded-t-lg items-center p-5  block align-middle h-60 w-60 overflow-hidden"
                  src={item.image}
                  alt=""
                />
              </Link>
              <div className="rounded-full bg-orange-500 text-white p-2 font-bold w-10 h-10 text-center absolute top-5 left-5 text-sm">
                70%
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white  ">
                    {item.title.substring(0, 20)}
                  </h5>
                  <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white  ">
                    {item.price}
                  </h5>
                </div>
                <div className="flex justify-around">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.rating.rate}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.rating.count}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Electronics;
