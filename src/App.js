import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllMenu from './components/AllMenu/AllMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

export default function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <div className="contents">
          <Routes>
            <Route path="/" element={}>
              
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
