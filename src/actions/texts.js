import * as types from "constants/ActionTypes";

export function listTextStatItemsAction() {
  return { type: types.ACTION_LIST_TEXT_STAT_ITEMS };
}

export function studyTextAction(payload) {
  return { type: types.ACTION_STUDY_TEXT, payload };
}

export function getTextDetailAction(payload) {
  return { type: types.ACTION_GET_TEXT_DETAIL, payload };
}

export function updateStudyTextAction(payload) {
  return { type: types.ACTION_UPDATE_STUDY_TEXT, payload };
}

export function updateTextsAction(payload) {
  return { type: types.ACTION_UPDATE_TEXTS, payload };
}
