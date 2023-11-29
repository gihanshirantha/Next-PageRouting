import axios from "axios";

const baseURL = process.env.NEXT_APP_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseURL, 
  });

export default axiosInstance;