import axios from "axios";

const API = "http://localhost:8080/api/dashboard";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getDashboard = async () => {

    const response = await axios.get(
        API,
        getAuthHeader()
    );

    return response.data;

};