// import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <App />
);

serviceWorker.unregister();
