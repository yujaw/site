import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'swiper/css'
import 'swiper/css/effect-coverflow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
