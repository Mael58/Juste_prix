"use client";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Saisie from './juste_prix/Saisie';
import Board from './morpion/Board';

import Tetris from './Tetris/Tetris';

const Layout = ({ children }) => (
  <div>
    <div className='bar'>
      <Link to="/Saisie">Juste Prix <br /></Link>
      <Link to="/Morpion">Morpion <br/></Link>
      <Link to="Tetris">Tetris</Link>
      
    </div>
    <div className='content'>
      {children}
    </div>
  </div>
);

const Accueil = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Saisie" element={<Saisie />} />
          <Route path="/Morpion" element={<Board />} />
          <Route path="/Tetris" element={<Tetris />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Accueil;
