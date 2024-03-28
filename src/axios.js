import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pcost.tech",
});

export default instance;
