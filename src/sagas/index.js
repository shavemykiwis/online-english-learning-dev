import { takeEvery } from "redux-saga";

import * as types from "constants/ActionTypes";

import { fetchLogin, fetchSignup, fetchLogout } from "./auth";
import {
  fetchGetProfile,
  fetchCreateProfile,
  fetchModifyProfile,
  fetchDeleteProfile
} from "./profile";
import { fetchGetTextDetail, fetchListTextStatItems } from "./texts";
import {
  fetchListClasses,
  fetchCreateClass,
  fetchDeleteClass,
  fetchGetClassDetail,
  fetchGetClassMemberDetail
} from "./classes";
import { fetchListBooksStatItems } from "./books";
import { fetchListStoreItems } from "./store";
import { fetchGetWord } from "./dictionary";

import { handleFetchError } from "./error";

export default function* root() {
  yield [
    // Authentication
    takeEvery(types.ACTION_LOGIN, fetchLogin),
    takeEvery(types.ACTION_LOGOUT, fetchLogout),
    takeEvery(types.ACTION_SIGNUP, fetchSignup),
    // Profile
    takeEvery(types.ACTION_GET_PROFILE, fetchGetProfile),
    takeEvery(types.ACTION_MODIFY_PROFILE, fetchModifyProfile),
    takeEvery(types.ACTION_DELETE_PROFILE, fetchDeleteProfile),
    takeEvery(types.ACTION_CREATE_PROFILE, fetchCreateProfile),
    // Texts
    takeEvery(types.ACTION_LIST_TEXT_STAT_ITEMS, fetchListTextStatItems),
    takeEvery(types.ACTION_GET_TEXT_DETAIL, fetchGetTextDetail),
    // Books
    takeEvery(types.ACTION_LIST_BOOKS_STAT_ITEMS, fetchListBooksStatItems),
    // Store
    takeEvery(types.ACTION_LIST_STORE_ITEMS, fetchListStoreItems),
    // Classes
    takeEvery(types.ACTION_LIST_CLASSES, fetchListClasses),
    takeEvery(types.ACTION_CREATE_CLASS, fetchCreateClass),
    takeEvery(types.ACTION_DELETE_CLASS, fetchDeleteClass),
    takeEvery(types.ACTION_GET_CLASS_DETAIL, fetchGetClassDetail),
    takeEvery(types.ACTION_GET_CLASS_MEMBER_DETAIL, fetchGetClassMemberDetail),
    // Dictionary
    takeEvery(types.ACTION_GET_DICTIONARY_ENTRY_DATA, fetchGetWord),
    // Error
    takeEvery(types.ACTION_HANDLE_ERROR, handleFetchError)
  ];
}
