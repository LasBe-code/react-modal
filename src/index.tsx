import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './lib';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
);

reportWebVitals();
