import APPCONFIG from "constants/Config";
import { ACTION_UPDATE_PROFILE } from "../constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  language: "chinese",
  display_language: "english",
  level: "",
  plan: "free",
  study_months: -1,
  study_reason: "",
  most_interested: ""
};

const profile = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ACTION_UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

module.exports = profile;
