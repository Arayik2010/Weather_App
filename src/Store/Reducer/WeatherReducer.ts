import { AnyAction } from "redux";
import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
} from "../Action/ActionWeather";

interface weatherState {
  weatherData: any[];
  loading: boolean;
  error: null | string;
}

const initialState: weatherState = {
  weatherData: [],
  loading: false,
  error: null,
};

export const weatherDataReducer = (
  state = initialState,
  action: AnyAction
): weatherState => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: [...state.weatherData, action.payload],
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
