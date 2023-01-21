import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useWeatherData } from "../../Hooks/Hooks";
import { action } from "../../Interface/common";
import { weatherActionThunk } from "../../Store/Action/ActionWeather";
import { WeatherInf } from "../WeatherInfo/WeatherInf";
import "./Home.css";

export const Home = () => {
  const [text, setText] = useState("");

  const { weatherData } = useWeatherData();

  console.log(weatherData);

  const dispatch = useDispatch();

  let userNameFunc = (value: string) => {
    dispatch(weatherActionThunk(value) as unknown as action);
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeForm">
          <input
            className="homeInput"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => text && userNameFunc(text)}>add</button>
        </div>
        <WeatherInf weatherData={weatherData} />
      </div>
    </div>
  );
};
