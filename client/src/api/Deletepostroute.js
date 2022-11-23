import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

export const DeletePostRoute = (id) => API.delete(`/delete/${id}/post`);
