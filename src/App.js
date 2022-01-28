import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import * as ROUTES from './constants/routes';
// import { Home, Membership } from './pages';

import './App.css';
import React from 'react'
import { Home, Membership } from './pages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/membership' element={<Membership />} />
      </Routes>
    </Router>
  )
}
