import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context/SocketContext";

import App from "./App";
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)