import axios from "axios";

const API = "http://localhost:8080/api/deadlines";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getDeadlines = async () => {

    const response = await axios.get(
        API,
        getAuthHeader()
    );

    return response.data;

};

export const addDeadline = async (
    deadline: any
) => {

    const response = await axios.post(
        API,
        deadline,
        getAuthHeader()
    );

    return response.data;

};