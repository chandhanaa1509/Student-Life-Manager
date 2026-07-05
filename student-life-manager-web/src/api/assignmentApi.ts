import axios from "axios";

const API = "http://localhost:8080/api/assignments";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAssignments = async () => {
  const response = await axios.get(API, getAuthHeader());
  return response.data;
};

export const addAssignment = async (assignment: any) => {
  const response = await axios.post(
    API,
    assignment,
    getAuthHeader()
  );

  return response.data;
};

export const updateAssignment = async (
  id: string,
  assignment: any
) => {
  const response = await axios.put(
    `${API}/${id}`,
    assignment,
    getAuthHeader()
  );

  return response.data;
};

export const deleteAssignment = async (id: string) => {
  await axios.delete(
    `${API}/${id}`,
    getAuthHeader()
  );
};