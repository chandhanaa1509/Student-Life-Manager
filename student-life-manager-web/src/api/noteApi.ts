import axios from "axios";

const API = "http://localhost:8080/api/notes";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getNotes = async () => {
  const response = await axios.get(API, getAuthHeader());
  return response.data;
};

export const addNote = async (note: any) => {
  const response = await axios.post(API, note, getAuthHeader());
  return response.data;
};