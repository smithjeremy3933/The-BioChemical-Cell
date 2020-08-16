import { FETCH_BIO_NEWS } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BIO_NEWS:
      return { ...state, ..._.mapKeys(action.payload, "publishedAt") };
    default:
      return state;
  }
};
