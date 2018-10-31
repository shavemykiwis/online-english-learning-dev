import APPCONFIG from "constants/Config";
import { ACTION_UPDATE_BOOKS } from "constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  books: [],
  booksInitialized: false,
  detail: []
};

const books = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ACTION_UPDATE_BOOKS:
      return {
        ...state,
        ...action.payload
      };
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};

module.exports = books;
