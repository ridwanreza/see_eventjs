const initialState = {
  dataHome: [],
  dataHome2: [],
  dataHome3: [],
  dataHome4: [],
  dataHome5: [],
  dataHome6: [],
  dataHome7: [],
  dataHome8: [],
  dataHome9: [],
  dataHome10: [],
  dataHome11: [],
  dataHome12: [],
  dataHome13: [],
  loading: false,
  isLoading: false,
  isLoadingHome: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'GETEVENT START':
      return {
        ...state,
        isLoadingHome: true,
      };
    case 'GETEVENT_START_SUCCES':
      return {
        ...state,
        isLoadingHome: false,
        dataHome: action.data,
        dataHome2: action.data2,
        dataHome3: action.data3,
        dataHome4: action.data4,
        dataHome5: action.data5,
        dataHome6: action.data6,
        dataHome7: action.data7,
      };

    case 'GETEVENT_FAILED':
      return {
        isLoadingHome: false,
      };
    case 'GETEVENT_ID':
      return {
        ...state,
        isLoading: true,
        dataHome8: [],
      };
    case 'GETEVENT_ID_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataHome8: action.data8,
      };
    case 'GETEXPLORE_ID':
      return {
        ...state,
        isLoading: true,
        dataHome9: [],
      };
    case 'GETEXPLORE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataHome9: action.data9,
      };
    case 'GETEXPLORE_FAILED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GETMYEVENT_ID':
      return {
        ...state,
        isLoading: true,
        dataHome10: [],
      };
    case 'GETMYEVENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataHome10: action.data10,
      };
    case 'GETPROFIL_ID':
      return {
        ...state,
        isLoading: true,
      };
    case 'GETPROFIL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataHome11: action.data11,
      };
    case 'EDITPROFIL_START':
      return {
        ...state,
        isLoading: true,
        dataHome11: [],
      };
    case 'EDITPROFIL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataHome11: action.data11,
      };
    case 'SEARCH_START':
      return {
        ...state,
        isLoading12: true,
        dataHome12: [],
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading12: false,
        dataHome12: action.data12,
      };
    case 'GETSAVED_START':
      return {
        ...state,
        isLoading13: true,
        dataHome13: [],
      };
    case 'GETSAVED_SUCCESS':
      return {
        ...state,
        isLoading13: false,
        dataHome13: action.data13,
      };

    default:
      return state;
  }
};

export default home;
