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
        isLoading: false,
        isLoggedIn: false,
        token: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.token,
        isLoading: true,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default auth;
