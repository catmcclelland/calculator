import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/americantypewriterstd-bold.otf";
import "./fonts/QuartzRegular.ttf";



const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);