import * as types from "constants/ActionTypes";

export function listBookTextsAction(payload) {
  return { type: types.ACTION_LIST_BOOK_TEXTS, payload };
}

export function listBookStatItemsAction() {
  return { type: types.ACTION_LIST_BOOKS_STAT_ITEMS };
}

export function updateBooksAction(payload) {
  return { type: types.ACTION_UPDATE_BOOKS, payload };
}
