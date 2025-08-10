import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://historic-artifacts-server.vercel.app",
  baseURL: "http://localhost:3000",
  withCredentials: false,
});

export default axiosSecure;
