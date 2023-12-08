import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import StokIkan from "./pages/stok-ikan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<StokIkan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
