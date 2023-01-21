import React from "react";
import { IProduct } from "../../Interface/common";
import "./WeatherInf.css";

interface WeatherInfoData {
  weatherData: any[];
}

export const WeatherInf = ({ weatherData }: WeatherInfoData) => {
  return (
    <div className="weatherInfo">
      {weatherData.map((el: IProduct) => (
        <div key={el.id}>
          <div className="celsius">
            <h1>{Math.floor(el.main.temp)}</h1>
            <p>o</p>
            <h1>C</h1>
          </div>
          <div className="fahrenheit">
            <h1>{Math.floor((el.main.temp * 9) / 5 + 32)}</h1>
            <p>o</p>
            <h1>F</h1>
          </div>
          <h2>{el.name}</h2>
        </div>
      ))}
    </div>
  );
};
