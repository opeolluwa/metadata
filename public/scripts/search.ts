import axios from "axios";

export async function search(query: string) {
  return axios.get(`/api/search?q=${query}`);
}

