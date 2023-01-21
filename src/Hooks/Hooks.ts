import { useSelector } from "react-redux";
import { Istate } from "../Interface/common";

const weatherDataSelector = (state: Istate) => state.dataWeather;

export const useWeatherData = () => useSelector(weatherDataSelector);
