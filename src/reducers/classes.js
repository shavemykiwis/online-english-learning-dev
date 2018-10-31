import APPCONFIG from "constants/Config";
import {
  ACTION_UPDATE_CLASSES,
  ACTION_UPDATE_GET_CLASS_DETAIL
} from "constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  classes: [],
  classEntry: null,
  classEntryInitialized: false,
  classesInitialized: false
};

const classes = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ACTION_UPDATE_CLASSES:
      return {
        ...state,
        ...action.payload
      };
    case ACTION_UPDATE_GET_CLASS_DETAIL:
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

module.exports = classes;
