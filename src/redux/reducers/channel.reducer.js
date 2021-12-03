import * as actionTypes from "../actionType";

export const channelDetailsReducer = (
  preState = {
    loading: true,
    channel: {},
    subscriptionStatus: false,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case actionTypes.CHANNEL_DETAILS_REQUEST:
      return {
        ...preState,
        loading: true,
      };
    case actionTypes.CHANNEL_DETAILS_SUCCESS:
      return {
        ...preState,
        channel: payload,
        loading: false,
      };

    case actionTypes.CHANNEL_DETAILS_FAIL:
      return {
        ...preState,
        channel: null,
        loading: false,
        error: payload,
      };
    case actionTypes.SUBSCRIPTION_STATUS_REQUEST:
      return {
        ...preState,
      };
    case actionTypes.SUBSCRIPTION_STATUS_SUCCESS:
      return {
        ...preState,
        subscriptionStatus: payload,
      };

    case actionTypes.SUBSCRIPTION_STATUS_FAIL:
      return {
        ...preState,
        error: payload,
      };

    default:
      return preState;
  }
};
