import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store'
import './Style/index.css';
import HomePage from './Pages/Home';
import CatalogItemPage from './Pages/CatalogItemPage';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import FormPage from './Pages/FormPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/item" element={<CatalogItemPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </Provider>
  </BrowserRouter>
);