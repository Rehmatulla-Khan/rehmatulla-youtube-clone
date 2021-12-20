import * as actionTypes from "../actionType";

const initialState = {
  loading: true,
  comments: null,
};

export const commentListReducer = (preState = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actionTypes.COMMENT_LIST_REQUEST:
      return {
        ...preState,
        loading: true,
      };
    case actionTypes.COMMENT_LIST_SUCCESS:
      return {
        ...preState,
        comments: payload,
        loading: false,
      };

    case actionTypes.COMMENT_LIST_FAIL:
      return {
        ...preState,
        loading: false,
        error: payload,
      };

    default:
      return preState;
  }
};
