import React from "react";
import { Routes, Route } from "react-router-dom";
import { WeatherChart } from "../WeaterChart/WeatherChart";
import { Home } from "../Home/Home";

export const RouterLink = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<WeatherChart/>} />
      </Routes>
    </div>
  );
};
