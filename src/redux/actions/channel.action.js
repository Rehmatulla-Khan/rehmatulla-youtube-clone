import * as actionTypes from "../actionType";
import request from "../../api";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id: id,
      },
    });

    dispatch({
      type: actionTypes.CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CHANNEL_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.SUBSCRIPTION_STATUS_REQUEST,
    });

    const { data } = await request("/subscription", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(data);

    dispatch({
      type: actionTypes.SUBSCRIPTION_STATUS_SUCCESS,
      payload: data.items.length === 1,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SUBSCRIPTION_STATUS_FAIL,
      payload: error.message,
    });
  }
};
