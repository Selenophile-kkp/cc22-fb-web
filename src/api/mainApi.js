import axios from "axios";

export const mainApi = axios.create({
  baseURL: "http://localhost:8066/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRegister = async (body) => {
  return await mainApi.post("/auth/register", body);
};
