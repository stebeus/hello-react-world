import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './components/Greeting.jsx';
import { Egg } from './components/Food.jsx';
import ConvertedHtmlElement from './components/ConvertedHtmlElement.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Egg />
    <ConvertedHtmlElement />
  </StrictMode>,
);
