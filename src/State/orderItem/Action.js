import { api } from "../../config/ApiConfig";
import {
  GET_ORDER_ITEM_BY_ID_FAILURE,
  GET_ORDER_ITEM_BY_ID_REQUEST,
  GET_ORDER_ITEM_BY_ID_SUCCESS,
} from "./ActionType";

export const getorderItem = (orderItemId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_ITEM_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orderItem/${orderItemId}`);
    console.log("This is order item ------>", data);
    dispatch({ type: GET_ORDER_ITEM_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_ITEM_BY_ID_FAILURE, payload: error.message });
  }
};
