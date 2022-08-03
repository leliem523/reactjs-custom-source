import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modules from "./src/modules";
import { Provider } from "react-redux";
import { store } from "./src/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {Modules.map((Module) => (
          <Route
            key={Module.key}
            path={Module.path}
            element={<Module.Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);
