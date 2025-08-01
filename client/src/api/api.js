import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VITE_API_URL,
});

const get = (url, params = {}, config = {}) =>
  api.get(url, { params, ...config });
const post = (url, data = {}, config = {}) => api.post(url, data, config);
const put = (url, data = {}, config = {}) => api.put(url, data, config);
const del = (url, config = {}) => api.delete(url, config);

export { get, post, put, del };
