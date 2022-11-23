import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

export const PostRoute = (data) => API.post("/post", data);
