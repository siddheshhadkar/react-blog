import config from "../environments/development";
import axios from "axios";

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 5000,
});

export default instance;
