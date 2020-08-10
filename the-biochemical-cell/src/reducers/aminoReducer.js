import { FETCH_ALL_AMINOS, FETCH_AMINO } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_AMINOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_AMINO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
