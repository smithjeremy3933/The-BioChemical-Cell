import history from "../history";
import backend from "../apis/backend";
import news from "../apis/news";
import { newsApiKey } from "../config/keys";
import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_ALL_AMINOS,
  FETCH_AMINO,
  FETCH_BIO_NEWS,
} from "./types";

// AUTH API

export const signup = (formValues) => async (dispatch) => {
  try {
    await backend.post("/api/users/signup", formValues);
    history.push("/signin");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid information." });
    console.log(e);
  }
};

export const signin = (formValues) => async (dispatch) => {
  try {
    const response = await backend.post("/api/users/signin", formValues);
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

// AMINO ACID API

export const getAllAminoAcids = () => async (dispatch) => {
  const response = await backend.get("/api/aminoacids/allaminoacids", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch({ type: FETCH_ALL_AMINOS, payload: response.data });
};

export const getAminoAcid = (id) => async (dispatch) => {
  const response = await backend.get(`/api/aminoacids/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch({ type: FETCH_AMINO, payload: response.data });
};

// NEWS API

export const getNews = () => async (dispatch) => {
  const response = await news.get(``, {
    params: {
      apiKey: newsApiKey,
      q: "biology",
      sortBy: "relevancy",
    },
  });
  dispatch({ type: FETCH_BIO_NEWS, payload: response.data.articles });
};
