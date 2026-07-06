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