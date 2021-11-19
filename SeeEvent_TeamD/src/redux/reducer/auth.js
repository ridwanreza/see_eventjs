const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
        isLoggedIn: true,
        token: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.token,
        isLoading: false,
        isLoggedIn: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default auth;
