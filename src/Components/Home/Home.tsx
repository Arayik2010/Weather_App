import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useWeatherData } from "../../Hooks/Hooks";
import { action } from "../../Interface/common";
import {
  forecastActionThunk,
  weatherActionThunk,
} from "../../Store/Action/ActionWeather";
import { WeatherInf } from "../WeatherInfo/WeatherInf";
import "./Home.css";

export const Home = () => {
  const [text, setText] = useState("");

  const { weatherData } = useWeatherData();

  const dispatch = useDispatch();

  let userNameFunc = (value: string) => {
    dispatch(weatherActionThunk(value) as unknown as action);
    dispatch(forecastActionThunk(value) as unknown as action);
  };

  useEffect(() => {
    setText("");
  }, [weatherData]);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeForm">
          <input
            className="homeInput"
            placeholder="Search..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" onClick={() => text && userNameFunc(text)}>
            <img
              className="iconimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HCBVsrZwmQChDmAJUOM2nATk9RN61cYe2g&usqp=CAU"
              alt=""
            />
          </button>
        </div>
        <WeatherInf weatherData={weatherData} />
      </div>
    </div>
  );
};
