import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    console.log("Users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default axiosInstance;
