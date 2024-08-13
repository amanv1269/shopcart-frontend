import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./order/Reducer";
import AdminOrdersReducer from "./Admin/Order/Reducer";
import {CategoryReducer} from "./product/CategoryReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
  orderItem: orderReducer,
  adminOrder: AdminOrdersReducer,
  productCategory:CategoryReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
