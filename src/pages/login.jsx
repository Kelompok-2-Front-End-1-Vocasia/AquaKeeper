import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Login = () => {
  const [showing, setShowing] = useState(false);

  const onEyeClick = () => {
    setShowing(!showing);
  };

  return (
    <div className="container h-screen flex justify-center items-center bg-[#F6F6F6]">
      <div className="w-[1021px] h-[504px] bg-[#FFFFFF] shadow-md rounded-[30px]">
        <div className="text-center mt-[22px]">
          <span className="text-[40px] font-bold text-[#0F8FED]">
            AquaKeeper
          </span>
        </div>
        <div className="flex gap-[95px] mt-[16px] w-full justify-center">
          <div className="">
            <img src="/src/assets/fish-bowl.png" alt="" />
          </div>
          <div className="mt-[23px]">
            <div className="flex flex-col items-center">
              <div className="mb-[14px]">
                <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.55]">
                  Username
                </span>
                <input
                  type="text"
                  className="block w-[457px] h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3"
                />
              </div>
              <div>
                <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.55]">
                  Password
                </span>
                <div className="relative">
                  <input
                    type={showing ? "text" : "password"}
                    className="w-[457px] h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3"
                  />
                  <button onClick={onEyeClick}>
                    <FontAwesomeIcon
                      icon={showing ? faEyeSlash : faEye}
                      className="absolute right-5 top-1/2 -translate-y-1/2"
                    />
                  </button>
                </div>
              </div>
              <button className="w-[188px] h-[52px] bg-[#0D81D5] rounded-[15px] text-white hover:bg-[#0d7bd5] hover:shadow-lg mt-[39px]">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
