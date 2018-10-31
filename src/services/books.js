import APPCONFIG from "constants/Config";

const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

import token from "./auth";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;

const endPoints = {
  listBookTexts: `${apiEndPointPrefix}book_texts`,
  listBooksStatItems: `${apiEndPointPrefix}bookstatitems`
};

export const listBookTexts = () => {
  const url = apiURL + endPoints.listBookTexts;
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

export const listBooksStatItems = () => {
  const url = apiURL + endPoints.listBooksStatItems;
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
