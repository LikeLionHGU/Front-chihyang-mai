import axios from "axios";

export const getFunding = async () => {
  const response = await axios.get("http://localhost:8080/api/fund");
  return response.data;
};

export const postFunding = async (data: any) => {
  const response = await axios.post("http://localhost:8080/api/fund", data);
  return response;
};

export const patchFunding = async (fundingId: any) => {
  const response = await axios.patch(
    `http://localhost:8080/api/fund?id=${fundingId}`
  );
  return response;
};
