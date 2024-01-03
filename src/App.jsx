import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import StokIkan from "./pages/stok-ikan";
import IkanTerjual from "./pages/ikan-terjual";
import StokIkanku from "./pages/stok-ikanku";
import AnalisisPenjualan from "./pages/analisis-penjualan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<StokIkanku />} />
        <Route path="/ikan-terjual" element={<IkanTerjual />} />
        <Route path="/kelola-ikan/:id" element={<IkanTerjual />} />
        <Route path="/analisis-penjualan" element={<AnalisisPenjualan />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
