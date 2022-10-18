import axios from "axios";

const api = axios.create({
  baseURL: "https://loginu-api.vercel.app/",
});

export default api;