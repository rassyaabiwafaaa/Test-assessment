import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "../Pages";
import App from "../App";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
