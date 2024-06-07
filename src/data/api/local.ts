import axios from "axios";

export const LOCAL_BASE_URL = "http://localhost:8080/api";

// Apenas lado cliente
export const localApi = axios.create({
   baseURL: LOCAL_BASE_URL,
   timeout: 5 * 1000,
});