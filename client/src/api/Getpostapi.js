import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

export const GetPostRoute = () => API.get("/get/post");
