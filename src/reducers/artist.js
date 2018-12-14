import { InitialState } from "./initialState.js";

const artist = (state = InitialState.artist, action) => {
  switch (action.type) {
    case "SET_ARTIST_INFO":
      return Object.assign({}, state, {
        ...action.payload
      });
    case "RESET_STATE":
      return Object.assign({}, state, {
        ...InitialState.artist
      });
    default:
      return state;
  }
};

export default artist;
