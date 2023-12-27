import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import StokIkan from "./pages/stok-ikan";
// import IkanTerjual from "./pages/ikan-terjual";
import SalesRecord from "./pages/ikanTerjual";
import FishComponent from "./pages/tambahIkan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<StokIkan />} />
          <Route path="/ikan-terjual" exact element={<SalesRecord />} />
          <Route path="/tambah-ikan" exact element={<FishComponent />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
