import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction, handleErrorAction } from "actions/app";
import { updateBooksAction } from "actions/books";

import { listBooksStatItems } from "../services/books";

export function* fetchListBooksStatItems(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(listBooksStatItems);

    if (res.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateBooksAction({ books: res, booksInitialized: true }));
    } else if (res.message !== undefined) {
      yield put(
        updateAppAction({
          loading: false,
          error: true,
          errorMessage: res.message
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
