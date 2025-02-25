import axios from "axios";


const resultAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_DB_URL,
});

export const getTestResults = async () => {
  const response = await resultAPI.get("testResults/");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await resultAPI.post("testResults/", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await resultAPI.delete("testResults/" + id);
  return response.data;
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  const response = await resultAPI.patch("testResults/" + id, {
    visibility: !visibility,
  });
  return response.data;
};
