import axios from "axios";

export const localApi = axios.create({
   baseURL: "/api",
   timeout: 5 * 1000,
});
