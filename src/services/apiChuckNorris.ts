import axios from "axios";
export const server_api = axios.create({
  baseURL: "https://api.chucknorris.io/",
});
