import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/menu";



const IkanTerjual = () => {
  return (
    <>
      <div>
      <Navbar />
      <Header />

      <Menu />

      <h1>List Ikan Terjual</h1>
      </div>

    </>
  )
}

export default privateRoute(IkanTerjual)