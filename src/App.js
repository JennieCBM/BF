import React from "react";
import { Route, Routes, HashRouter} from "react-router-dom";
import Layout from "./sections/Layout";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Platos from "./pages/Platos"
import ElCafe from "./pages/ElCafe"
import Fotos from "./pages/Fotos"
import Reservas from "./pages/Reservas"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />}/>
            <Route path="/platos" element={<Platos />}/>
            <Route path="/elCafe" element={<ElCafe />}/>
            <Route path="/fotos" element={<Fotos />}/>
            <Route path="/reservas" element={<Reservas />}/>
            <Route path="*" element={<NotFound />}/>          
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
