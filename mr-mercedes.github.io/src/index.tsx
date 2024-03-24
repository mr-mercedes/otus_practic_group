import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Panda from "./Panda";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <Panda/>
  </React.StrictMode>,
);
