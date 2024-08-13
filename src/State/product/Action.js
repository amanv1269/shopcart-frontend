import { api } from "../../config/ApiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log("product data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsByID = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log("productId data", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("----------------------------" + data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  // console.log("productId data", productId);
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    const { data } = await api.post(`/api/admin/product`, product);
    console.log("----------------------------" + data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  console.log("productId data", productId);
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const { data } = await api.delete(`/api/admin/product/${productId}/delete`);
    console.log("----------------------------" + data);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const findProductByCategory = (categories) => async (dispatch) => {
  for (let i = 0; i < categories.length; i++) {
    dispatch({
      type: FIND_PRODUCT_BY_CATEGORY_REQUEST,
      payload: categories[i],
    });
    console.log("array-->", categories[i]);
    try {
      const { data } = await api.get(
          `/api/products/category?category=${categories[i]}`
      );
      console.log("$$$$$$$$$$$$$", data);
      dispatch({
        type: FIND_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: { category: categories[i], products: data },
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_CATEGORY_FAILURE,
        payload: { category: categories[i], error: error.message },
      });
    }
  }
};

