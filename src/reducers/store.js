import APPCONFIG from "constants/Config";
import {
  ACTION_UPDATE_STORE_ITEMS,
  ACTION_MERGE_STORE_ITEMS
} from "constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  texts: [],
  books: [],
  storeInitialized: false,
  items: []
};

const store = (state = initialState, action) => {
  let index;
  let items = [];
  switch (action.type) {
    case ACTION_UPDATE_STORE_ITEMS:
      return {
        ...state,
        ...action.payload
      };
    case LOCATION_CHANGE:
      return initialState;
    case ACTION_MERGE_STORE_ITEMS:
      const { books, texts } = state;
      for (index = 0; index < books.length; index++) {
        items.push({
          type: "book",
          value: books[index]
        });
      }
      for (index = 0; index < texts.length; index++) {
        items.push({
          type: "text",
          value: texts[index]
        });
      }
      items.sort((a, b) => {
        if (a.value.last_modified < b.value.last_modified) {
          return -1;
        }
        return 1;
      });
      return {
        ...state,
        items: items,
        storeInitialized: true
      };
    default:
      return state;
  }
};

module.exports = store;
