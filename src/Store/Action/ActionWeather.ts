import { Dispatch, AnyAction } from "redux";
// import { apiWeatherIstance } from "../../Api/ApiInstance";

export const FETCH_WEATHER_PENDING = "FETCH_WEATHER_PENDING";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

const WeatherPendingAction = () => ({
  type: FETCH_WEATHER_PENDING,
  payload: "",
});

const WeatherSuccessAction = (aboutData: any[]) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: aboutData,
});

const WeatherErrorAction = (error: string) => ({
  type: FETCH_WEATHER_ERROR,
  payload: error,
});

export const weatherActionThunk =
  (user: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(WeatherPendingAction());
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${user}&units=metric&appid=2ffaf26e758681e3ac2117754a0190cd`
      );
      const data = await response.json();
      dispatch(WeatherSuccessAction(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(WeatherErrorAction(err.message));
      }
    }
  };
