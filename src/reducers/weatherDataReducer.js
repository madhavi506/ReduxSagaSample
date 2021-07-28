const initialState = {
    weatherData: [],
    loading: true
  };
  const weatherDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_DATA': {
            return {
              ...state,
              loading: true,
            };
          }
      case 'GET_WEATHER_DATA': {
        return {
          ...state,
          weatherData: action.action,
          loading: false
        };
      }
      default: {
        return state;
      }
    }
  };
  export default weatherDataReducer;
