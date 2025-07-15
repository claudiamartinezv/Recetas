import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap y FontAwesome (instalados por npm)
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
