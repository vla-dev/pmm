import React from 'react'
import './index.css'
import { createRoot } from "react-dom/client";
import Router from './Router';


createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Router />
  // </React.StrictMode>,
)
