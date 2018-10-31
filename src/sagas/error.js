import { call, put, select } from "redux-saga/effects";
import { logoutAction } from "actions/auth";

export function* handleFetchError(action) {
  switch (action.payload.status) {
    case 401:
      yield put(logoutAction(true));
  }
}
