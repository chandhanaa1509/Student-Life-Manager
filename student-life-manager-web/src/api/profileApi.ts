import axios from "axios";

const API = "http://localhost:8080/api/profile";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getProfile = async () => {

    const response = await axios.get(
        API,
        getAuthHeader()
    );

    return response.data;

};

export const updateProfile = async (
    profile: any
) => {

    const response = await axios.put(
        API,
        profile,
        getAuthHeader()
    );

    return response.data;

};