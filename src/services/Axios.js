import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://192.168.1.159:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
