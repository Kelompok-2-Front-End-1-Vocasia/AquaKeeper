import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import StokIkan from "./pages/stok-ikan";
import IkanTerjual from "./pages/ikan-terjual";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<StokIkan />} />
        <Route path="/ikan-terjual" element={<IkanTerjual />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
