import privateRoute from "../hoc/privateRoute";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/Menu";



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