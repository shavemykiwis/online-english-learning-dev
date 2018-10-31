import * as types from "constants/ActionTypes";

export function listStoreItemsAction() {
  return { type: types.ACTION_LIST_STORE_ITEMS };
}

export function updateStoreItemsAction(payload) {
  return { type: types.ACTION_UPDATE_STORE_ITEMS, payload };
}

export function mergeStoreItemsAction() {
  return { type: types.ACTION_MERGE_STORE_ITEMS };
}
