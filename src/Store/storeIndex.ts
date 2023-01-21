import { combineReducers } from "redux";
import { weatherDataReducer } from "./Reducer/WeatherReducer";



export const rootReducer = combineReducers({
    dataWeather:weatherDataReducer
    
})