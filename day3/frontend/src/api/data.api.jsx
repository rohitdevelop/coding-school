import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const createcard = async (data) => {
  const res = API.post("/data", data);
  return res;
};
export const allcards = async () => {
  const res = API.get("/allcards");
  return res;
};
