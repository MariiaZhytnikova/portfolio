import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { Providers } from "./app/providers";
import { BrowserRouter as Router } from "react-router-dom";

const isProd = import.meta.env.MODE === 'production';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Router basename={isProd ? "/portfolio/" : "/"}>
        <App />
      </Router>
    </Providers>
  </React.StrictMode>
);
