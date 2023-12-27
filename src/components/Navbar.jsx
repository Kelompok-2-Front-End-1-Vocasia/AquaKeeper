import { IoIosLogOut } from "react-icons/io";
import { logout } from "../utils/auth";


const Navbar = () => {
  return (
    <>
     <div className="flex justify-end mr-6 mb-4">
    <button
    onClick={logout}
    className=" flex justify-center gap-2 py-2 px-6 bg-[#0D81D5] rounded-2xl text-white text-xl font-semibold text-center hover:bg-[#0d7bd5] hover:shadow-lg mt-8 mb-8 mr-20"
  >
   <IoIosLogOut style={{ fontSize: '1.5rem' }}/> Logout
  </button>

    </div>
    </>
  )
}

export default Navbar