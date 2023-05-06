export const setSession = (key, value) => {
  window.sessionStorage.setItem(key, value);
};

export const getSession = (key) => {
  return window.sessionStorage.getItem(key);
};

export const removeSession = (key) => {
  return window.sessionStorage.removeItem(key);
};

export const session = {
  setSession,
  getSession,
  removeSession,
};
