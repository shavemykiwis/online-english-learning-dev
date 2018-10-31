import { call, put, select } from "redux-saga/effects";

import { push } from "react-router-redux";

import { loginAction, logoutAction, signupAction } from "actions/auth";
import { updateAppAction } from "actions/app";
import { updateAuthAction } from "actions/auth";

import { login, signup } from "services/auth";

export function* fetchLogin(action) {
  console.log("--login---", action);
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );
    const redirect = action.payload.redirect;
    const payload = {
      email: action.payload.email,
      password: action.payload.password
    };
    const res = yield call(login, payload);
    console.log("-res-", res);
    console.log("-redirect-", redirect);
    if (res.message !== undefined) {
      console.log("-fail-");
      yield put(
        updateAppAction({
          loading: false,
          error: true,
          errorMessage: res.message
        })
      );
    } else {
      console.log("-success-");
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateAuthAction({ authenticated: true, ...res }));
      if (redirect !== "") {
        yield put(push(redirect));
      }
    }
  } catch (error) {
    yield put(
      updateAppAction({
        loading: false,
        error: true,
        errorMessage: "Invalid username/password"
      })
    );
    console.log("-login error-", error);
  }
}

export function* fetchSignup(action) {
  try {
    yield put(
      updateAppAction({ loading: true, error: false, errorMessage: "" })
    );

    const res = yield call(signup, action.payload);
    console.log("-res-", res);
    if (res.message !== undefined) {
      console.log("-fail-");
      yield put(
        updateAppAction({
          loading: false,
          error: true,
          errorMessage: res.message
        })
      );
    } else {
      console.log("-success-");
      yield put(
        updateAppAction({ loading: false, error: false, errorMessage: "" })
      );
      yield put(updateAuthAction({ authenticated: true, ...res }));
      yield put(push("/sign-up/1"));
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

export function* fetchLogout(action) {
  try {
    const redirect = action.payload;

    if (redirect === true) {
      const location = yield select(state => state.route.location);
      const pathname = location.pathname;

      const url = "/login?redirect=" + encodeURIComponent(pathname);

      yield put(updateAuthAction({ token: "", authenticated: false, me: {} }));

      yield put(push(url));
    } else {
      yield put(updateAuthAction({ token: "", authenticated: false, me: {} }));
    }
  } catch (error) {}
}
