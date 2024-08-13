import {
  GET_ORDER_ITEM_BY_ID_FAILURE,
  GET_ORDER_ITEM_BY_ID_REQUEST,
  GET_ORDER_ITEM_BY_ID_SUCCESS,
} from "./ActionType";

const intialState = {
  orderItem: null,
  error: null,
  loading: false,
};

export const orderItemReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ORDER_ITEM_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_ORDER_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderItem: action.payload,
      };

    case GET_ORDER_ITEM_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
