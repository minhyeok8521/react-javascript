import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

export default function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <div className="contents">
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
