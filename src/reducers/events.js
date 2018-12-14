import { InitialState } from "./initialState.js";

const events = (state = InitialState.events, action) => {
  switch (action.type) {
    case "POPULATE_EVENTS":
      return Object.assign({}, state, {
        records:action.payload
      });
    case "RESET_STATE":
      return Object.assign({}, state, {
        ...InitialState.events
      });
    default:
      return state;
  }
};

export default events;