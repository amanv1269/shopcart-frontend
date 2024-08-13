import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  CONFIRM_ORDERS_REQUEST,
  CONFIRM_ORDERS_SUCCESS,
  CONFIRM_ORDERS_FAILURE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  PLACED_ORDERS_REQUEST,
  PLACED_ORDERS_SUCCESS,
  PLACED_ORDERS_FAILURE,
  CANCELED_ORDERS_FAILURE,
} from "./ActionType";

const initialState = {
  orders: [],
  loading: false,
  error: "",
};

const AdminOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: "",
      };
    case GET_ORDERS_FAILURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };

    case CONFIRM_ORDERS_REQUEST:
    case PLACED_ORDERS_REQUEST:
    case DELETE_ORDERS_REQUEST:
    case DELIVERED_ORDERS_REQUEST:
    case SHIP_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CONFIRM_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmed: action.payload,
      };
    case PLACED_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        placed: action.payload,
      };

    case DELIVERED_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        delivered: action.payload,
      };
    case SHIP_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ship: action.payload,
      };
    case DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        delete: action.payload,
      };

    case CONFIRM_ORDERS_FAILURE:
    case SHIP_ORDERS_FAILURE:
    case CANCELED_ORDERS_FAILURE:
    case DELIVERED_ORDERS_FAILURE:
    case PLACED_ORDERS_FAILURE:
    case DELETE_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedOrders: action.payload,
      };

    default:
      return state;
  }
};

export default AdminOrdersReducer;
