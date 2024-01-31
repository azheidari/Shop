import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import * as Action from "./../../redux/action/product-action";
import Search from "../search/Search";


function Header(props) {
  const dispatch = useDispatch();

  const searchItem = (term) => {
    dispatch(Action.productSearch(term));
  };

  return (
    <Fragment>
      <header>
        <Search searchItems={searchItem} />
      </header>
    </Fragment>
  );
}

export default Header;
