import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { updateAppAction } from "actions/app";
import { updateProfileAction } from "actions/profile";

import {
  getProfile,
  modifyProfile,
  createProfile,
  deleteProfile
} from "services/profile";

export function* fetchCreateProfile(action) {
  try {
    const profile = yield select(state => state.profile);
    console.log("-profile-", profile);
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const res = yield call(createProfile, profile);
    console.log("-res-", res);
    if (res.status === 201) {
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      console.log("--success--");
      yield put(push("/login"));
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
    console.log("-login error-", error);
  }
}

export function* fetchModifyProfile() {}
export function* fetchGetProfile() {}
export function* fetchDeleteProfile() {}
