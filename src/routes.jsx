import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Props from "./pages/Props";
import State from "./pages/State";
import CicloDeVida from "./pages/CicloDeVida";
import Hooks from "./pages/Hooks";
import VirtualDOM from "./pages/VirtualDOM";
import Redux from "./pages/Redux";


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span role="img" aria-label="logo">⚛️</span> Three React
    </div>
    <div className="navbar-menu">
      <Link to="/">Inicio</Link>
      <Link to="/props">Props</Link>
      <Link to="/state">State</Link>
      <Link to="/ciclo-de-vida">Ciclo de Vida</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/virtual-dom">Virtual DOM</Link>
      <Link to="/redux">Redux</Link>
    </div>
  </nav>
);

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/ciclo-de-vida" element={<CicloDeVida />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/virtual-dom" element={<VirtualDOM />} />
        <Route path="/redux" element={<Redux />} />
        {/* Opción 1: Redirigir al inicio para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      
      </Routes>
    </main>
  </BrowserRouter>
);

export default AppRoutes;