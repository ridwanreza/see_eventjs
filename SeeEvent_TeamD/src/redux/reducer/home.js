const initialState = {
  dataHome: [],
  dataHome2: [],
  dataHome3: [],
  dataHome4: [],
  dataHome5: [],
  dataHome6: [],
  dataHome7: [],
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
        dataHome2: action.data2,
        dataHome3: action.data3,
        dataHome4: action.data4,
        dataHome5: action.data5,
        dataHome6: action.data6,
        dataHome7: action.data7,
      };
    default:
      return state;
  }
};

export default home;
