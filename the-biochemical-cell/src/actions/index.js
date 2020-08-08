import history from "../history";
import backend from "../apis/backend";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formValues) => async (dispatch) => {
  try {
    const response = await backend.post("/api/users/signup", formValues);
    console.log(response.data);
    history.push("/signin");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Username is already in use." });
  }
};

export const signin = (formValues) => async (dispatch) => {
  try {
    const response = await backend.post("/api/users/signin", formValues);
    console.log(response.data);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    history.push("/homepage");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid Login Information" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};
