export const initialState = [];

export const favoritesReducer = (state = [], action) => {
  console.error("state = ", state, "action = ", action);

  const safeState = Array.isArray(state) ? state : [];

  switch (action.type) {
    case "GET_FAVORITES":
      return Array.isArray(action.payload) ? action.payload : safeState;
    case "ADD_FAVORITE":
      return [action.payload, ...safeState];
    case "REMOVE_FAVORITE":
      return safeState.filter((item) => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return safeState;
  }
};
