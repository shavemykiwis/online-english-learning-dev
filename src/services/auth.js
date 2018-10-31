import APPCONFIG from "constants/Config";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;

const endPoints = {
  login: "rpc/login",
  signup: "rpc/signup"
};

export const login = credential => {
  const url = apiURL + endPoints.login;
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.pgrst.object+json"
      },
      method: "post",
      body: JSON.stringify(credential)
    })
      .then(response => {
        // if (response.status !== 200) {
        // return reject(response)
        // }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const signup = credential => {
  const url = apiURL + endPoints.signup;
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.pgrst.object+json"
      },
      method: "post",
      body: JSON.stringify(credential)
    })
      .then(response => {
        // if (response.status !== 200) {
        // return reject(response)
        // }
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
