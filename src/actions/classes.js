import * as types from "constants/ActionTypes";

export function listClassesAction() {
  return { type: types.ACTION_LIST_CLASSES };
}

export function createClassAction(payload) {
  return { type: types.ACTION_CREATE_CLASS, payload };
}

export function deleteClassAction(payload) {
  return { type: types.ACTION_DELETE_CLASS, payload };
}

export function getClassDetailAction(payload) {
  return { type: types.ACTION_GET_CLASS_DETAIL, payload };
}

export function getClassMemberDetailAction(payload) {
  return { type: types.ACTION_GET_CLASS_MEMBER_DETAIL, payload };
}

export function updateClassesAction(payload) {
  return { type: types.ACTION_UPDATE_CLASSES, payload };
}

export function updateGetClassDetailAction(payload) {
  return { type: types.ACTION_UPDATE_GET_CLASS_DETAIL, payload };
}
