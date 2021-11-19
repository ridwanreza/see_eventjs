const initialState = {
  isLoadingSignup: false,
  token: '',
  dataSignup: '',
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isLoadingSignup: true,
        token: '',
      };
    case 'SIGNUP_SUCCES':
      return {
        ...state,
        token: action.token,
        isLoadingSignup: false,
      };
    case 'SINGUP_FAILED':
      return {
        ...state,
        isLoadingSignup: true,
      };
    default:
      return state;
  }
};

export default signup;
