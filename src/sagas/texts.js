import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction, handleErrorAction } from "actions/app";
import { updateTextsAction, updateStudyTextAction } from "actions/texts";
import { getTextDetail, listTextStatItems } from "../services/texts";

export function* fetchListTextStatItems(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(listTextStatItems);

    if (res.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateTextsAction({ texts: res, textsInitialized: true }));
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
        errorMessage: "fetch text stats list error."
      })
    );
    console.log("-fetch list texts error-", error);
    yield put(handleErrorAction(error));
  }
}

export function* fetchGetTextDetail(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(getTextDetail, action.payload);
    console.log("Start to fetch text detail. " + action.payload);
    if (res.message === undefined) {
      console.dir(res);
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateStudyTextAction({ text: res, textInitialized: true }));
    } else if (res.message !== undefined) {
      yield put(
        updateAppAction({
          loading: false,
          error: false,
          errormessage: res.message
        })
      );
    }
  } catch (error) {
    yield put(
      updateAppAction({
        loading: false,
        error: true,
        errorMessage: "fetch text error."
      })
    );
    console.log("-fetch the text details error-", error);
    yield put(handleErrorAction(error));
  }
}
