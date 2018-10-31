import { combineReducers } from "redux";
import settings from "./settings";
import app from "./app";
import auth from "./auth";
import routeReducer from "./route";
import profile from "./profile";
import texts from "./texts";
import study from "./study";
import books from "./books";
import store from "./store";
import dictionary from "./dictionary";
import classes from "./classes";

const reducers = {
  route: routeReducer,
  settings,
  auth,
  app,
  profile,
  texts,
  study,
  books,
  store,
  dictionary,
  classes
};

module.exports = combineReducers(reducers);
