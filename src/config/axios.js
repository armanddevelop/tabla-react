import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 2000,
});

export default clientAxios;
