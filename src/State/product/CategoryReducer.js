import {
  FIND_PRODUCT_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: {},
  products: {},
  error: {},
};

export const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [action.payload]: true },
        error: { ...state.error, [action.payload]: null },
      };
    case FIND_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [action.payload.category]: false },
        products: {
          ...state.products,
          [action.payload.category]: action.payload.products,
        },
        error: { ...state.error, [action.payload.category]: null },
      };
    case FIND_PRODUCT_BY_CATEGORY_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [action.payload.category]: false },
        error: {
          ...state.error,
          [action.payload.category]: action.payload.error,
        },
      };

    default:
      return state;
  }
};
