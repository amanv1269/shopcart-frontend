import { api } from "../../config/ApiConfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType"; // Adjust the import path as necessary

// Create Payment
export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/payment/${orderId}`, ); // Adjust the API endpoint as necessary
    // dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

// Update Payment
export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );
    // dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    console.log("data", data);
  } catch (error) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};

// import { api } from "../../config/ApiConfig";
// import {
//   CREATE_PAYMENT_REQUEST,
//   CREATE_PAYMENT_SUCCESS,
//   CREATE_PAYMENT_FAILURE,
//   UPDATE_PAYMENT_REQUEST,
//   UPDATE_PAYMENT_SUCCESS,
//   UPDATE_PAYMENT_FAILURE,
// } from "./ActionType"; // Adjust the import path as necessary

// // Create Payment
// export const createPayment = (orderId) => async (dispatch) => {
//   dispatch({ type: CREATE_PAYMENT_REQUEST });
//   try {
//     const { data } = await api.post(`/api/payment/${orderId}`, {}); // Adjust the API endpoint as necessary
//     dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
//     if (data.payment_link_url) {
//       window.location.href = data.payment_link_url;
//     }
//   } catch (error) {
//     let errorMessage = error.message;
//     if (error.response && error.response.data && error.response.data.message) {
//       errorMessage = error.response.data.message;
//     }
//     dispatch({ type: CREATE_PAYMENT_FAILURE, payload: errorMessage });
//   }
// };

// // Update Payment
// export const updatePayment = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_PAYMENT_REQUEST });
//   try {
//     const { data } = await api.get(
//       `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
//     );
//     dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
//     console.log("data", data);
//   } catch (error) {
//     let errorMessage = error.message;
//     if (error.response && error.response.data && error.response.data.message) {
//       errorMessage = error.response.data.message;
//     }
//     dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: errorMessage });
//   }
// };
