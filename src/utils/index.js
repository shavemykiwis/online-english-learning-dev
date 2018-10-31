export const isValidEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const getHHMM = dateTimeString => {
  const date = new Date(dateTimeString);
  const h = date.getHours();
  const m = date.getMinutes();

  return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
};

export const getMMDDYYYY = dateTimeString => {
  const date = new Date(dateTimeString);
  const d = date.getDate();
  const m = date.getMonth() + 1;

  return `${m < 10 ? "0" + m : m}/${
    d < 10 ? "0" + d : d
  }/${date.getFullYear()}`;
};
