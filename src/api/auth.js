import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_USER_URL,
});

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (accessToken) => {
  const response = await api.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateProfile = async ({ updateNickName, accessToken }) => {
  const formData = new FormData();

  formData.append("nickname", updateNickName);

  const response = await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
