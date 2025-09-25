import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me/api",
});

export async function fetchUsers(results = 20) {
  const res = await API.get(`/?results=${results}`);
  return res.data.results;
}
