import React, { useCallback, useState } from "react";
import { Chart } from "../Chart/Chart";
import "./WeatherChart.css";
import { useWeatherData } from "../../Hooks/Hooks";
import { IProduct } from "../../Interface/common";
import moment from "moment";

export const WeatherChart = () => {
  const { weatherData } = useWeatherData();
  const [detals, setDetals] = useState(false);

  const showItemDetals = () => {
    setDetals((prev) => !prev);
  };

  const timestampToTime = useCallback((timestamp: number) => {
    const time = moment.unix(timestamp).format("HH:mm:ss");
    return time;
  }, []);

  return (
    <div className="weatherchart">
      <div className="weatherdata">
        {weatherData.map((el: IProduct) => (
          <div className="containerinfodata" key={el.id}>
            <div className="moretempinfo">
              <h2>
                {el.name}, {el.sys.country}
              </h2>

              <h3>{el.weather[0].main}</h3>
              <div className="tempmax">
                <h1>Temp-Max: {Math.floor(el.main.temp_max)}</h1>
                <p>o</p>
                <h1>C</h1>
              </div>
              <div className="tempmin">
                <h1>Temp-Min: {Math.floor(el.main.temp_min)}</h1>
                <p>o</p>
                <h1>C</h1>
              </div>
            </div>

            <div className="showdetals">
              <button onClick={showItemDetals}>
                {detals ? "Hide Detals" : "Show Detals"}
              </button>
              {detals && (
                <div>
                  <p>Wind: {el.wind.speed} m/s</p>
                  <p>Humidity: {el.main.humidity} %</p>
                  <p>Pressure: {el.main.pressure} hPa</p>
                  <div>
                    <p>Sunrise: {timestampToTime(el.sys.sunrise)}</p>
                    <p>Sunset: {timestampToTime(el.sys.sunset)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="weatherchartdata">
        <Chart />
      </div>
    </div>
  );
};
