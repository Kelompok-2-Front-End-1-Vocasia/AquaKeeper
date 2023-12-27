import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASH_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const instanceImg = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASH_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
