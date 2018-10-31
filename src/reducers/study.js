import APPCONFIG from "constants/Config";
import {
  ACTION_STUDY_TEXT,
  ACTION_UPDATE_STUDY_TEXT
} from "constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  textstat: null,
  text: null,
  textInitialized: false
};

const study = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    // this action called from texts list page that we could know which textstat will be studied.
    case ACTION_STUDY_TEXT:
      return {
        ...state,
        ...action.payload
      };
    // this action called when the text is ready downloaded for study.
    case ACTION_UPDATE_STUDY_TEXT:
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

module.exports = study;
