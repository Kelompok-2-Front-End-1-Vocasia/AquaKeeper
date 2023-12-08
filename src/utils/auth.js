import CryptoJS from "crypto-js";
import { instance } from "./instance";

export const encrypt = (text) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    import.meta.env.VITE_AUTH_SECRET_KEY
  ).toString();

  return data;
};

const decrypt = (text) => {
  const bytes = CryptoJS.AES.decrypt(
    text,
    import.meta.env.VITE_AUTH_SECRET_KEY
  );

  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return data;
};

export const login = async (values) => {
  const res = await instance.get("/users").then((val) => {
    const data = decrypt(val.data[0].password);

    if (values.username === "admin" && values.password === data) {
      const token = new Date().getTime();
      return token;
    } else {
      return false;
    }
  });

  return res;
};
