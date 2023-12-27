import { IoIosLogOut } from "react-icons/io";
import { logout } from "../utils/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="flex justify-end mr-6 mt-8 mb-8">
        <button
          onClick={logout}
          className=" flex justify-center gap-2 py-2 px-6 bg-[#0D81D5] rounded-2xl text-white text-xl font-semibold text-center hover:bg-[#0d7bd5] hover:shadow-lg mt-8 mb-8 mr-24"
        >
          <IoIosLogOut style={{ fontSize: "1.5rem" }} /> Logout
        </button>
      </div> */}
      <div className="flex justify-between sm:justify-end items-center h-[90px] mx-[25px] sm:items-start sm:pt-[25px]">
        <Link className="sm:hidden">
          <img src="/src/assets/AquaKeeper.png" className="mt-2" />
        </Link>
        <button className="sm:hidden" onClick={logout}>
          <img src="/src/assets/btn-logout.png" className="bg-cover" />
        </button>
        <button
          className="w-[130px] h-[40px] bg-white hidden sm:inline-block rounded-2xl text-[#0D81D5] text-[16px] font-semibold relative"
          onClick={logout}
        >
          <IoIosLogOut
            style={{ fontSize: "25px", position: "absolute", left: 17 }}
          ></IoIosLogOut>
          <span className="ms-7">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
