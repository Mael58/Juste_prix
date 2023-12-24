"use client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Saisie from "@/components/juste_prix/Saisie";
import ReactDOM from "react-dom";
import Accueil from "@/components/Accueil";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saisie" element={<Saisie />} />
        <Route path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
