import { json } from "react-router-dom";
import shop from "../../service/axios-config";
import { ProductModel } from "../../models/product";

export const ALLPRODUCTS = "ALLPRODUCTS";
export const PRODUCTBYCATEGORY = "PRODUCTBYCATEGORY";
export const PRODUCT = "PRODUCT";
export const SNACKBAR_LOADING = "SNACKBAR_LOADING";
export const EMPTYSEARCHRESULT = "EMPTYSEARCHRESULT";
export const EMPTYRESULTSHOW = "EMPTYRESULTSHOW";
export const RESETFORM = "RESETFORM";
export const PRODUCTSEARCH = "PRODUCTSEARCH";

export const getAllProducts = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      shop
        .get("products/")
        .then((response) => {
          const items = [];

          Array.isArray(response.data) &&
            response.data.forEach((item) => {
              const { id, title, price, description, category, image, rating } =
                item;
              const product = new ProductModel(
                id,
                title,
                price,
                description,
                category,
                image,
                rating
              );
              items.push(product);
            });

          dispatch({ type: ALLPRODUCTS, payload: items });

          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const getInCategory = (item) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      shop
        .get(`products/category/${item}`)
        .then((response) => {
          dispatch({ type: PRODUCTBYCATEGORY, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const getInProduct = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      shop
        .get(`products/${id}`)
        .then((response) => {
          dispatch({ type: PRODUCT, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const emptySearchList = () => {
  return { type: EMPTYSEARCHRESULT };
};

export const emptyResultShow = () => {
  return { type: EMPTYRESULTSHOW };
};

export const productSearch = (term) => {
  return { type: PRODUCTSEARCH, payload: term };
};

// export const resetForm = () => {
//   dispatch({ type: RESETFORM });
// };
