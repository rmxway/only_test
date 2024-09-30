import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './fonts.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
