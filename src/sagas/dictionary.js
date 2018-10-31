import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction, handleErrorAction } from "actions/app";
import { updateDictionaryAction } from "actions/dictionary";

import { getWord } from "../services/dictionary";

export function* fetchGetWord(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(getWord);
    if (res.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(
        updateDictionaryAction({
          wordEntryData: res,
          wordEntryDataInitialized: true
        })
      );
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
