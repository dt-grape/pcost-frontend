import axios from "axios";

const instance = axios.create({
    baseURL: "http://159.223.251.110:8000/",
});

export default instance;
