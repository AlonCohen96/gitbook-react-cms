import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import reactToWebComponent from 'react-to-webcomponent';
import App from './App.tsx'
import './index.css'

// Convert the React component to a Web Component
const AppWebComponent = reactToWebComponent(App, React, ReactDOM);

// Define the new custom element
customElements.define('app-web-component', AppWebComponent);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
