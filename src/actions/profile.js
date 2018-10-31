import * as types from "constants/ActionTypes";

export function updateProfileAction(payload) {
  return { type: types.ACTION_UPDATE_PROFILE, payload };
}

export function createProfileAction(payload) {
  return { type: types.ACTION_CREATE_PROFILE, payload };
}

export function getProfileAction(payload) {
  return { type: types.ACTION_GET_PROFILE, payload };
}

export function modifyProfileAction(payload) {
  return { type: types.ACTION_MODIFY_PROFILE, payload };
}

export function deleteProfileAction(payload) {
  return { type: types.ACTION_DELETE_PROFILE, payload };
}
