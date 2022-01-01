const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
        isLoggedIn: true,
      };
    case 'SAVE_TOKEN':
      return {
        ...state,
        token: action.savetoken,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    case 'REMOVE_TOKEN':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    case 'REMOVE_TOKEN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
