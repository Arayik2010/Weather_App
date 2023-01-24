import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useWeatherData } from "../../Hooks/Hooks";

import moment from "moment";

export const Chart = () => {
  const { forecastData } = useWeatherData();

  const configData = forecastData?.list?.map((el) => {
    return {
      name: moment(el.dt_txt).format("dddd").substring(0, 3),
      max_temp: el.main.temp_max,
      min_temp: el.main.temp_min,
      amt: el.main.temp,
    };
  });

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={configData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="max_temp" stroke="#8884d8" />
        <Line type="monotone" dataKey="min_temp" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};
