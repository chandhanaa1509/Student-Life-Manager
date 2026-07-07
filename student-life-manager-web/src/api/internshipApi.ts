import axios from "axios";

const API = "http://localhost:8080/api/internships";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getInternships = async () => {

    const response = await axios.get(
        API,
        getAuthHeader()
    );

    return response.data;

};

export const addInternship = async (
    internship: any
) => {

    const response = await axios.post(
        API,
        internship,
        getAuthHeader()
    );

    return response.data;

};

export const updateInternship = async (
    id: string,
    internship: any
) => {

    const response = await axios.put(
        `${API}/${id}`,
        internship,
        getAuthHeader()
    );

    return response.data;

};

export const deleteInternship = async (
    id: string
) => {

    await axios.delete(
        `${API}/${id}`,
        getAuthHeader()
    );

};