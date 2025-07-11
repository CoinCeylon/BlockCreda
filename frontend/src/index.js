import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MeshProvider } from '@meshsdk/react';
import { Buffer } from 'buffer';
window.Buffer = Buffer;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MeshProvider>
      <App />
    </MeshProvider>
  </React.StrictMode>
);
