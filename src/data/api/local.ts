import axios from "axios";

export const LOCAL_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_URL;

// Apenas lado cliente
export const localApi = axios.create({
   baseURL: LOCAL_BASE_URL,
   timeout: 5 * 1000,
});