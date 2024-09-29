import React from 'react'
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import App from './App.tsx'
import './index.css'

// Convert the React component to a Web Component
const AppWebComponent = reactToWebComponent(App, React, ReactDOM);

// Define the new custom element
customElements.define('app-web-component', AppWebComponent);

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);  // createRoot for React 18+
    root.render(
        <React.StrictMode>
            <div id='app-container'>
                <App />
            </div>
        </React.StrictMode>
    );
}
