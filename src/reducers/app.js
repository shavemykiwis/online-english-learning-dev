import APPCONFIG from "constants/Config";
import { ACTION_UPDATE_APP } from "../constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  loading: false,
  error: false,
  errorMessage: ""
};

const app = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ACTION_UPDATE_APP:
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

module.exports = app;
