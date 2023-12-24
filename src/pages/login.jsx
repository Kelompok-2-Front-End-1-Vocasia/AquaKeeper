import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useFormik } from "formik";
import { login } from "../utils/auth";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import authRoute from "../hoc/authRoute";

const Login = () => {
  const [showing, setShowing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      try {
        const data = await login(values).then((val) => {
          return val;
        });

        if (data) {
          localStorage.setItem("auth", data.toString());
          navigate("/home");
        } else {
          setShowAlert(true);
        }
      } catch (err) {
        console.log(err);
      } finally {
        action.resetForm();
      }
    },
  });

  const onEyeClick = () => {
    setShowing(!showing);
  };

  return (
    <>
      <div className="">
        <Toast
          className={
            showAlert ? "absolute right-10 top-6" : "absolute right-full top-6"
          }
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Username or password invalid!
          </div>
          <Toast.Toggle />
        </Toast>
        <div className="container h-screen mx-auto flex justify-center items-center bg-[#F6F6F6] min-w-full">
          <div className="mx-auto h-screen bg-[#F6F6F6] sm:bg-[#FFFFFF] sm:shadow-lg w-full sm:w-[1021px] sm:h-[504px] sm:rounded-[30px]">
            <div className="text-center mt-[44px] sm:mt-[22px] sm:w-[278px] sm:h-[65px] sm:mx-auto">
              <div className="text-[32px] sm:text-[40px] font-bold text-[#0F8FED]">
                AquaKeeper
              </div>
            </div>
            <div className="flex flex-col w-full pb-[44px] sm:flex-row items-center sm:items-start sm:justify-center sm:mt-[16px]">
              <div className="w-[235px] h-[235px] sm:w-[341px] sm:h-[341px]">
                <img src="/src/assets/fish-bowl.png" alt="" />
              </div>
              <div className="mt-[14px] sm:mt-[23px] sm:ms-[95px]">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center"
                >
                  <div className="mb-[14px]">
                    <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.55]">
                      Username
                    </span>
                    <input
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className="block w-[304px] h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3 sm:w-[457px] sm:h-[52px]"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.55]">
                      Password
                    </span>
                    <div className="relative">
                      <input
                        type={showing ? "text" : "password"}
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="w-[304px] h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3 sm:w-[457px] sm:h-[52px]"
                      />
                      <button
                        type="button"
                        onClick={onEyeClick}
                        className="bg-[#EDEDED] p-2 absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <FontAwesomeIcon
                          icon={showing ? faEyeSlash : faEye}
                          className=""
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-[188px] h-[52px] bg-[#0D81D5] rounded-[15px] text-white hover:bg-[#0d7bd5] hover:shadow-lg mt-[33px] text-[16px]"
                  >
                    Masuk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default authRoute(Login);
