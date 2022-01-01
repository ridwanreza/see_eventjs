const initialState = {
  isLoadingSignup: false,
  dataSignup: '',
  error: '',
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isLoadingSignup: true,
      };
    case 'SIGNUP_SUCCES':
      return {
        ...state,
        isLoadingSignup: false,
      };
    case 'SINGUP_FAILED':
      return {
        ...state,
        isLoadingSignup: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default signup;
