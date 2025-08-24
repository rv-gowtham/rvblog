import axios from "axios";

const api = axios.create({
  baseURL: "https://rvblogback.vercel.app",
});

export default api;
