import { Axios } from "../services/Axios";

export const getEmployees = async () => {
  try {
    const response = await Axios.get("/employee");

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Server responded with an error status:",
        error.response.status
      );
      console.error("Error response data:", error.response.data);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received. Request details:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    console.error("Error config:", error.config);
    throw error;
  }
};
