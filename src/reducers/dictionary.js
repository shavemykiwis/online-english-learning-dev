import APPCONFIG from "constants/Config";
import { ACTION_UPDATE_DICTIONARY } from "../constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  wordEntryData: {},
  wordEntryDataInitialized: false
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_UPDATE_DICTIONARY:
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

module.exports = dictionary;
