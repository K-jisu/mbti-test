import api from "./api";

// const accessToken = localStorage.getItem("accessToken");

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

export const updateProfile = async (nickname) => {
  const formData = new FormData();
  // avatar와 nickname 중 하나 또는 모두 변경 가능
  // formData.append("avatar", imgFile);
  formData.append("nickname", nickname);

  const response = await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
