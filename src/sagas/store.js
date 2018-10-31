import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction, handleErrorAction } from "actions/app";
import { updateStoreItemsAction, mergeStoreItemsAction } from "actions/store";

import { listBooks, listTexts } from "../services/store";

export function* fetchListStoreItems(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const books = yield call(listBooks);
    const texts = yield call(listTexts);

    if (books.message === undefined && texts.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateStoreItemsAction({ texts, books }));
      yield put(mergeStoreItemsAction({}));
    } else {
      yield put(
        updateAppAction({
          loading: false,
          error: true,
          errorMessage:
            books.message === undefined ? texts.message : books.message
        })
      );
    }
  } catch (error) {
    yield put(
      updateAppAction({
        loading: false,
        error: true,
        errorMessage: "Something goes wrong"
      })
    );
    console.log("-fetch list texts error-", error);
    yield put(handleErrorAction(error));
  }
}
