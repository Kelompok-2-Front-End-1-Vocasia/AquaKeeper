import privateRoute from "../hoc/privateRoute";
import { logout } from "../utils/auth";

const StokIkan = () => {
  return (
    <>
      <div>StokIkan</div>
      <button
        onClick={logout}
        className="w-[188px] h-[52px] bg-[#0D81D5] rounded-[15px] text-white hover:bg-[#0d7bd5] hover:shadow-lg mt-[39px]"
      >
        Logout
      </button>
    </>
  );
};

export default privateRoute(StokIkan);
