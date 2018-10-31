import * as types from "constants/ActionTypes";

import { push } from "react-router-redux";

export function loginAction(credential) {
  return { type: types.ACTION_LOGIN, payload: credential };
}

export function logoutAction(redirect) {
  return { type: types.ACTION_LOGOUT, payload: redirect };
}

export function signupAction(payload) {
  return { type: types.ACTION_SIGNUP, payload };
}

export function updateAuthAction(payload) {
  return { type: types.ACTION_UPDATE_AUTH, payload };
}
