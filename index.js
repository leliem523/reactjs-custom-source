import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modules from "./src/modules";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Contact = Modules.find((item) => item.key === "Contact").Component;

root.render(
  <BrowserRouter>
    <Routes>
      {Modules.map((Module, index) => (
        <Route key={Module.key} path={Module.path} element={<Module.Component />} />
      ))}
    </Routes>
  </BrowserRouter>
);
