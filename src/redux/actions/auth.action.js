import firebase from "firebase/app";
import auth from "../../firebase.js";
import * as actionTypes from "../actionType.js";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);

    const accessToken = response.credential.accessToken;

    const profile = {
      name: response.additionalUserInfo.profile.name,
      photoURL: response.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};
