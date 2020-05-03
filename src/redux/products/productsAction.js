import Action_Types from "./productsActionTypes";

// get Products
export const getProductRequest = () => ({
  type: Action_Types.GET_PRODUCT_REQUEST
});

export const getTasksSuccess = newProduct => ({
  type: Action_Types.GET_PRODUCT_SUCCESS,
  payload: { newProduct }
});

export const getTasksError = err => ({
  type: Action_Types.GET_PRODUCT_ERROR,
  payload: { err }
});

// add product to cart

export const addToCartRequest = () => ({
  type: Action_Types.ADD_TO_CART_REQUEST
});

export const addToCartSuccess = id => ({
  type: Action_Types.ADD_TO_CART_SUCCESS,
  payload: { id }
});

export const addToCartError = err => ({
  type: Action_Types.ADD_TO_CART_ERROR,
  payload: { err }
});
