import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/global.css';

import Layout from './layout.js';

ReactDOM.createRoot(document.querySelector('#root')).render(<Layout />);