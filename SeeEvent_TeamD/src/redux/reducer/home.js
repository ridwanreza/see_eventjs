const initialState = {
  dataHome: [],
  loading: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'GETEVENT START':
      return {
        ...state,
        isLoading: true,
      };
    case 'GETEVENT_START_SUCCES':
      return {
        ...state,
        isLoading: false,
        dataHome: action.data,
      };
    default:
      return state;
  }
};

export default home;
