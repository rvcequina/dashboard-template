import React from 'react'
import App from '@/App.jsx'
import './scss/main.scss'
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AssetProvider from './provider/assets';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AssetProvider>
    <App />
    </AssetProvider>
  </React.StrictMode>,
)
