import * as types from "constants/ActionTypes";

export function updateDictionaryAction(payload) {
  return { type: types.ACTION_UPDATE_DICTIONARY, payload };
}

export function getDictionaryEntryDataAction() {
  return { type: types.ACTION_GET_DICTIONARY_ENTRY_DATA };
}
