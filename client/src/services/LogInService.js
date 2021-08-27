import axios from "./axiosConfig";

export default async function LogInService(data) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const response = await axios.post("/auth", data, { headers });
  return response.data;
}
