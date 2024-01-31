import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import Modal from "../ui/Modal";
import * as CartActon from "../../redux/action/cart-action";
import { useDispatch } from "react-redux";
import cart from "../../models/cart";

function Cart(props) {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const product = [];
  for (const key in items) {
    const item = new cart(items[key].id, items[key].amount);
    product.push(item);
  }

  const totalAmounts = `$${totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    dispatch(CartActon.removeItem(id));
  };
  const cartItemAddHandler = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartActon.addItemtoCart(item, amount));
  };

  // const order = () => {
  //   // let products = [];
  //   // items.forEach((prd) => {
  //   //   const entity = new cart(prd.id, prd.amount);
  //   //   products.push(entity);
  //   // });
  //   dispatch(CartActon.addToCart());
  // };

  const cartItems = (
    <>
      {items.map((item) => (
        <div className="flex justify-between items-center border-b pb-4 font-bold border-b-red-600 overflow-hidden">
          <img
            className="w-16 h-16 rounded-md border border-r-gray-300 p-1 mr-4"
            src={item.image}
            alt="imag"
          />
          <h2 className="text-black font-bold">
            {item.title.substring(1, 40)}
          </h2>
          <span className="text-red-600">{item.price}</span>
          <span className="bordr border-gray-300 py-1 px-3 rounded border  ">
            x {item.amount}
          </span>
          <div className="flex flex-col md:flex-row">
            <button
              className="text-base text-red-700 text-center  mr-2 rounded border  border-gray-300 px-3 py-1"
              onClick={cartItemRemoveHandler.bind(null, item.id)}
            >
              −
            </button>
            <button
              className="border rounded border-gray-300 px-3 py-1"
              onClick={() => cartItemAddHandler(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between align-middle text-base my-4 mx-0 text-black font-bold">
        <span>Total Amount</span>
        <span>{totalAmounts}</span>
      </div>
      <div className="flex justify-between align-middle  border-b border-b-red-900 m-4 overflow-hidden">
        <div className="flex flex-col md:flex-row font-bold">
          <button>Order</button>
        </div>
      </div>
    </>
  );

  return <Modal onClose={props.onClose}>{cartItems}</Modal>;
}

export default Cart;
