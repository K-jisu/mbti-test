import api from "./api";

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const res = await api.post("/login", userData);
  return res.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
