import axios from "axios";
import config from "@/config/config";

const instance = axios.create({
  baseURL: config.apiUrl + "/api",
  headers: { "Content-Type": "application/json" },
});

export default instance;
