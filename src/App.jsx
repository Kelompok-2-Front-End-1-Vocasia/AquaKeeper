import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import StokIkan from "./pages/stok-ikan";
import IkanTerjual from "./pages/ikan-terjual";
import TambahIkan from "./pages/tambahIkan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<StokIkan />} />
          <Route path="/ikan-terjual" exact element={<IkanTerjual />} />
          <Route path="/tambah-ikan" exact element={<TambahIkan/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
