import axios from "axios";

export const getFeed = async () => {
  const response = await axios.get("http://localhost:8080/api/feed");
  return response.data;
};

// export const postFeed = async (data: any) => {
//   const response = await fetch("http://localhost:8080/api/feed", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };

export const postFeed = async (data: any) => {
  const response = await axios.post("http://localhost:8080/api/feed", data);
  return response.data;
};
