import axios from "axios";

const API = "http://localhost:8080/api/resources";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getResources = async () => {
  const response = await axios.get(API, getAuthHeader());
  return response.data;
};

export const addResource = async (resource: any) => {
  const response = await axios.post(API, resource, getAuthHeader());
  return response.data;
};