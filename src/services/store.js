import APPCONFIG from "constants/Config";
import token from "./auth";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;
const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

const endPoints = {
  listText: `${apiEndPointPrefix}texts`,
  listBooks: `${apiEndPointPrefix}books`
};

export const listTexts = () => {
  const url = apiURL + endPoints.listText;
  const token = "Bearer " + store.getState().auth.token;
  const payload = {};

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: "get"
    })
      .then(response => {
        if (response.status !== 200) {
          return reject(response);
        }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const listBooks = () => {
  const url = apiURL + endPoints.listBooks;
  const token = "Bearer " + store.getState().auth.token;
  const payload = {};

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: "get"
    })
      .then(response => {
        if (response.status !== 200) {
          return reject(response);
        }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
