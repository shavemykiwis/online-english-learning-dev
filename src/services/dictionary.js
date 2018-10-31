import APPCONFIG from "constants/Config";
import token from "./auth";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;
const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

const endPoints = {
  getWord: `${apiEndPointPrefix}dict?word=eq.目的`
};

export const getWord = id => {
  const url = apiURL + endPoints.getWord;
  const token = "Bearer " + store.getState().auth.token;

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.pgrst.object+json",
        Authorization: token
      },
      method: "get"
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        if (response.status !== 200) {
          return reject(response);
        }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
