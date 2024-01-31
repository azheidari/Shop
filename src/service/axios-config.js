import axios from "axios";

const shop = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default shop;
