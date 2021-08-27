import axios from "./axiosConfig";

export default async function RegisterService(data) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  const response = await axios.post("/user", data, { headers });
  return response.data;
}
