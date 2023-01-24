import { Dispatch, AnyAction } from "redux";
import { apiWeatherIstance } from "../../Api/ApiInstance";
// import { apiWeatherIstance } from "../../Api/ApiInstance";

export const FETCH_WEATHER_PENDING = "FETCH_WEATHER_PENDING";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";
export const FETCY_FORECAST_SUCCESS = "FETCY_FORECAST_SUCCESS";

const WeatherPendingAction = () => ({
  type: FETCH_WEATHER_PENDING,
  payload: "",
});

const WeatherSuccessAction = (ewatherActionData: any[]) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: ewatherActionData,
});

const ForecastSuccessAction = (forecastData: null) => ({
  type: FETCY_FORECAST_SUCCESS,
  payload: forecastData,
});

const WeatherErrorAction = (error: string) => ({
  type: FETCH_WEATHER_ERROR,
  payload: error,
});

export const weatherActionThunk =
  (place: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(WeatherPendingAction());
      const response = await fetch(
        apiWeatherIstance.baseWeatherUrl +
          `/weather?q=${place}&units=metric&appid=2ffaf26e758681e3ac2117754a0190cd`
      );
      const data = await response.json();
      dispatch(WeatherSuccessAction(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(WeatherErrorAction(err.message));
      }
    }
  };
export const forecastActionThunk =
  (place: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(WeatherPendingAction());
      const response = await fetch(
        apiWeatherIstance.baseWeatherUrl +
          `/forecast?q=${place}&units=metric&appid=2ffaf26e758681e3ac2117754a0190cd`
      );
      const data = await response.json();
      dispatch(ForecastSuccessAction(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(WeatherErrorAction(err.message));
      }
    }
  };
