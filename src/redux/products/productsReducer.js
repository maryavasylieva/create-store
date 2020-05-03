import { combineReducers } from "redux";
import Action_Types from "./productsActionTypes";
import newProduct from "../../assets/newProduct.json";

const initialState = { newProduct };

console.log("initialState:", initialState);

const products = (state = initialState, { type, payload }) => {
  console.log("state:", state);

  // return state;
  switch (type) {
    case Action_Types.GET_PRODUCT_SUCCESS:
      return payload.newProduct;

    case Action_Types.ADD_TO_CART_SUCCESS:
      return;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Action_Types.GET_PRODUCT_ERROR:
    case Action_Types.ADD_TO_CART_ERROR:
    case Action_Types.REMOVE_FROM_CART_ERROR:
      return payload.err;

    case Action_Types.GET_PRODUCT_SUCCESS:
    case Action_Types.ADD_TO_CART_SUCCESS:
    case Action_Types.REMOVE_FROM_CART_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ products, error });
