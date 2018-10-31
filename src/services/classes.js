import APPCONFIG from "constants/Config";
import token from "./auth";

import { store } from "client";

const apiURL = APPCONFIG.apiURL;
const apiEndPointPrefix = APPCONFIG.apiEndPointPrefix;

const endPoints = {
  getClassDetail: `${apiEndPointPrefix}classes`,
  listClasses: `${apiEndPointPrefix}my_classes`,
  createClass: `${apiEndPointPrefix}classes`,
  deleteClass: `${apiEndPointPrefix}class_members`,
};

export const getClassDetail = classid => {
  const url =
    apiURL +
    endPoints.getClassDetail +
    "?&select=*,books:fe_books(sha1,title),texts:fe_texts(sha1,title),members:fe_class_members(user_id,role)&id=eq." +
    classid;
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

export const listClasses = () => {
  const url =
    apiURL +
    endPoints.listClasses +
    "?select=id,name,description,last_modified";
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

export const createClass = (payload) => {
  const url =
    apiURL +
    endPoints.createClass +
    "?select=id,last_modified";
  const token = "Bearer " + store.getState().auth.token;

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

export const deleteClass = (payload) => {
  const { class_id } = payload;
  const user_id = store.getState().auth.me.id;
  const token = "Bearer " + store.getState().auth.token;
  const url = apiURL + endPoints.deleteClass + `?class_id=eq.${class_id}&user_id=eq.${user_id}`;
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/vnd.pgrst.object+json",
        Prefer: "return=representation",
        Authorization: token
      },
      method: "delete",
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
