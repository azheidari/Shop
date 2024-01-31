import {
  ALLPRODUCTS,
  PRODUCTBYCATEGORY,
  PRODUCT,
  EMPTYRESULTSHOW,
  EMPTYSEARCHRESULT,
  PRODUCTSEARCH,
} from "../action/product-action";

const intialState = {
  theme: false,
  products: [],
  product: {},
  originalProducts: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ALLPRODUCTS:
      return {
        ...state,
        products: action.payload,
        originalProducts: action.payload,
      };
    case EMPTYRESULTSHOW:
      return { ...state, product: {} };
    case EMPTYSEARCHRESULT:
      return { ...state, products: [] };
    case PRODUCTBYCATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case PRODUCTSEARCH:
      const filtered = state.originalProducts.filter((item) =>
        item.title.includes(action.payload)
      );
      return {
        ...state,
        products: filtered,
      };
    default:
      return state;
  }
};

export default productReducer;
