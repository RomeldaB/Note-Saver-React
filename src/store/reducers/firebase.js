import * as actions from "../actions";

export default (state = { uid: null }, action) => {
  switch (action.type) {
    case actions.SET_UID:
      return { ...state, uid: action.uid };
    default:
      return state;
  }
};
