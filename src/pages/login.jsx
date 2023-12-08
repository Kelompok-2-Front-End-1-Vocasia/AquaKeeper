import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useFormik } from "formik";
import { login } from "../utils/auth";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showing, setShowing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        // await instance
        //   .get(`/users?username=${values.username}&password=${values.password}`)
        //   .then((res) => {
        //     if (res.data[0]) {
        //       alert("Login berhasil!");
        //     } else {
        //       alert("Login gagal!");
        //     }
        //   });
        // const encrypted = encrypt(values.password);
        // const dataPost = { username: values.username, password: encrypted };
        // await instance.post("users", dataPost).then((res) => console.log(res));
        // const data = await instance.get("/users");
        // const secret = decrypt(data.data[0].password);
        // if (values.username === "admin" && values.password === secret) {
        //   alert("Login berhasil!");
        // } else {
        //   alert("Login gagal!");
        // }

        const data = await login(values).then((val) => {
          return val;
        });

        if (data) {
          // alert("Login berhasil!");
          localStorage.setItem("auth", data.toString());
          navigate("/home");
          // localStorage.removeItem("auth");
          // console.log(typeof data.toString());
        } else {
          setShowAlert(true);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const onEyeClick = () => {
    setShowing(!showing);
  };

  return (
    <>
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
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="w-[457px] h-[52px] rounded-[15px] bg-[#EDEDED] text-xl px-3"
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
    </>
  );
};

export default Login;
