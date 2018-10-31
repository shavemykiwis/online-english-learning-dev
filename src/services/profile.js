import { connect } from "react-redux";

import APPCONFIG from "constants/Config";
const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

import { store } from "client";

const apiURL = APPCONFIG.apiURL;

const endPoints = {
  getProfile: `${apiEndPointPrefix}profile`,
  createProfile: `${apiEndPointPrefix}profile?select=id`,
  modifyProfile: `${apiEndPointPrefix}profile/`,
  deleteProfile: `${apiEndPointPrefix}profile`
};

export const getProfile = () => {
  const url = apiURL + endPoints.getProfile;
  const token = "Bearer " + store.getState().auth.token;

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

export const createProfile = payload => {
  const token = "Bearer " + store.getState().auth.token;
  const url = apiURL + endPoints.createProfile;
  console.log(url, token);
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        Authorization: token
      },
      method: "post",
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.status === 201) {
          return resolve(response);
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

export const modifyProfile = (index, payload) => {
  const token = "Bearer " + store.getState().auth.token;
  const url = apiURL + endPoints.modifyProfile + index;
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        Authorization: token
      },
      method: "patch",
      body: JSON.stringify(payload)
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

export const deleteProfile = payload => {
  const token = "Bearer " + store.getState().auth.token;
  const url = apiURL + endPoints.deleteProfile;
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: "delete",
      body: JSON.stringify(payload)
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
