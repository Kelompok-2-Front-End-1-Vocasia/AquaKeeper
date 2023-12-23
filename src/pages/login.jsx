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
      <div className="overflow-hidden">
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
          <div className="mx-auto bg-[#FFFFFF] shadow-md sm:w-[1021px] sm:h-[504px] sm:rounded-[30px]">
            <div className="text-center pt-10 sm:mt-[22px] sm:pt-0">
              <span className="text-3xl sm:text-[40px] font-bold text-[#0F8FED]">
                AquaKeeper
              </span>
            </div>
            <div className="flex gap-[95px] mt-[16px] w-full justify-center">
              <div className="relative sm:static opacity-10 sm:opacity-100 -top-16">
                <img src="/src/assets/fish-bowl.png" alt="" />
              </div>
              <div className="mt-[23px] absolute sm:static">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col items-center"
                >
                  <div className="mb-[14px]">
                    <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.60]">
                      Username
                    </span>
                    <input
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className="block w-64 h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3 sm:w-[457px] sm:h-[52px]"
                    />
                  </div>
                  <div>
                    <span className="text-[16px] font-medium text-[#0D81D5] opacity-[.60]">
                      Password
                    </span>
                    <div className="relative">
                      <input
                        type={showing ? "text" : "password"}
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="w-64 h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3 sm:w-[457px] sm:h-[52px]"
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
                    className="w-[188px] h-[52px] bg-[#0D81D5] rounded-[15px] text-white hover:bg-[#0d7bd5] hover:shadow-lg mt-[39px]"
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
