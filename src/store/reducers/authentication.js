import * as actions from "../actions";

export default (state = { loggedIn: null }, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return { ...state, loggedIn: true };
    case actions.LOG_OUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
