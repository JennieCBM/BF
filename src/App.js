import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./sections/Layout";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Platos from "./pages/Platos"
import ElCafe from "./pages/ElCafe"
import Fotos from "./pages/Fotos"
import Reservas from "./pages/Reservas"
import NotFound from "./pages/NotFound";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />}/>
            <Route path="/platos" element={<Platos />}/>
            <Route path="/elCafe" element={<ElCafe />}/>
            <Route path="/fotos" element={<Fotos />}/>
            <Route path="/reservas" element={<Reservas />}/>
            <Route path="*" element={<NotFound />}/>          
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
