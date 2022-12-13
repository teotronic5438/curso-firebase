import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
