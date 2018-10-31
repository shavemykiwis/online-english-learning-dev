import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction, handleErrorAction } from "actions/app";
import {
  updateClassesAction,
  updateGetClassDetailAction
} from "actions/classes";
import { getClassDetail, listClasses, createClass, deleteClass } from "../services/classes";

export function* fetchListClasses(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(listClasses);

    console.log("-fetch list classes complete-", res);
    if (res.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(
        updateClassesAction({ classes: res, classesInitialized: true })
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
        errorMessage: "fetch text stats list error."
      })
    );
    console.log("-fetch list classes error-", error);
    yield put(handleErrorAction(error));
  }
}

export function* fetchCreateClass(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(createClass, action.payload);

    console.log("-fetch create classes complete-", res);
    if (res.message === undefined) {
      yield call(fetchListClasses);
      yield call(action.payload.closeDialog);
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
    console.log("-fetch create classes error-", error);
    yield put(handleErrorAction(error));
  }
}

export function* fetchDeleteClass(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(deleteClass, action.payload);

    console.log("-fetch delete classes complete-", res);
    if (res.message === undefined) {
      yield call(fetchListClasses);
      yield call(action.payload.closeDialog);
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
    console.log("-fetch delete classes error-", error);
    yield put(handleErrorAction(error));
  }
}

export function* fetchGetClassDetail(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(getClassDetail, action.payload);
    console.log("Start to fetch class detail. " + action.payload);
    if (res.message === undefined) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(
        updateGetClassDetailAction({
          classEntry: res,
          classEntryInitialized: true
        })
      );
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
    console.log("-fetch the class details error-", error);
    yield put(handleErrorAction(error));
  }
}

export function* fetchGetClassMemberDetail(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(getClassDetail, action.payload);
    console.log("Start to fetch class detail. " + action.payload);
    if (res.message === undefined) {
      console.dir(res);
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(
        updateGetClassDetailAction({ class: res, classInitialized: true })
      );
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
    console.log("-fetch the class details error-", error);
    yield put(handleErrorAction(error));
  }
}
