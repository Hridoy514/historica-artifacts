import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://historic-artifacts-server.vercel.app",
  withCredentials: false,
});

export default axiosSecure;
