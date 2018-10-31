import APPCONFIG from "constants/Config";
import {
  ACTION_UPDATE_PROFILE,
  ACTION_UPDATE_TEXTS
} from "constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  texts: [],
  current_textstat: null,
  textsInitialized: false
};

const texts = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ACTION_UPDATE_TEXTS:
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

module.exports = texts;
