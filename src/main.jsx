import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './Context/CounterContext.jsx';
import TokenProvider from './Context/TokenContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <TokenProvider>
        <App />
      </TokenProvider>
    </CounterContextProvider>
  </StrictMode>
);
