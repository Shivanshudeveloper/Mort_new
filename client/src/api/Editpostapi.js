import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

export const EditPostRoute = (id, data) => API.put(`/edit/${id}/post`, data);
