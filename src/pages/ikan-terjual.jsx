import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Menu from "../components/menu";



const IkanTerjual = () => {
  return (
    <>
    <Navbar />
        <Header />

        <Menu />

    </>
  )
}

export default privateRoute(IkanTerjual)