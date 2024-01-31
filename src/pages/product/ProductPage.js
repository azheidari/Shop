import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Action from "../../redux/action/product-action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as CartAction from "../../redux/action/cart-action";


function Product() {
  AOS.init();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const getAllProductss = async () => {
    await dispatch(Action.getAllProducts());
  };

  useEffect(() => {
    getAllProductss();
  }, []);

  const cartItem = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartAction.addItemtoCart(item, amount));
  };



  return (
    <>
    
      <div className="flex justify-around  py-5">
        <div className="flex justify-center flex-wrap ">
          {products &&
            products.map((item, index) => (
              <div className=" max-w-sm m-1 shadow-md relative  hover:shadow-xl transition duration-300 mx-5 bg-white items-center  border border-gray-200  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <Link
                  key={index.toString()}
                  to={item.id.toString()}
                  data-aos="fade-down"
                >
                  <img
                    className="rounded-t-lg items-center p-5  block align-middle h-60 w-60 overflow-hidden"
                    src={item.image}
                    alt=""
                  />
                  <div className="rounded-full bg-orange-500 text-white p-2 font-bold w-10 h-10 text-center absolute top-5 left-5 text-sm">
                    70%
                  </div>
                  <div className="p-5 ">
                    <div className="flex justify-between">
                      <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white  ">
                        {item.title.substring(0, 20)}
                      </h5>
                      <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white  ">
                        {item.price}
                      </h5>
                    </div>
                    <div className="flex justify-around mb-1 font-normal text-gray-700 dark:text-gray-400">
                      <p>{item.rating.rate}</p>
                      <p>{item.rating.count}</p>
                    </div>
                  </div>
                </Link>
                <div className="mx-10 mb-5">
                  <button
                    onClick={() => cartItem(item)}
                    href="#"
                    className="inline-flex items-center m-auto px-16 align-middle py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Product;
