import APPCONFIG from "constants/Config";
import token from "./auth";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;
const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

const endPoints = {
  getTextDetail: `${apiEndPointPrefix}texts`,
  listTextStatItems: `${apiEndPointPrefix}textstatitems`,
  createNewText: "texts?select=last_modified"
};

export const createNewText = () => {
  const url = apiURL + endPoints.createNewText;
  const token = "Bearer " + store.getState().auth.token;
  const payload = {};

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: "post",
      body: JSON.stringify(payload)
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

export const getTextDetail = sha1 => {
  const url = apiURL + endPoints.getTextDetail + "?sha1=eq." + sha1;
  const token = "Bearer " + store.getState().auth.token;
  const payload = {};

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
        if (response.status !== 200) {
          return reject(response);
        }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const listTextStatItems = () => {
  const url = apiURL + endPoints.listTextStatItems;
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
