import * as actionTypes from "../actionType";
import request from "../../api";

export const getCommentsOfVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.COMMENT_LIST_REQUEST,
    });

    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });

    dispatch({
      type: actionTypes.COMMENT_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.COMMENT_LIST_FAIL,
      payload: error.message,
    });
  }
};
