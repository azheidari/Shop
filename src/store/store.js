import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

import product from "../../src/redux/reducer/product.reducer";
import cart from "../../src/redux/reducer/cart.reducer";

const reducer = combineReducers({
  product,
  cart,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
