import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => {
  return {
    type: "LOGIN",
    uid
  };
};
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({ type: "LOGOUT" });

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut();
  };
};
