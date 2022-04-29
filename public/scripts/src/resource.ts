import axios from "axios";

export async function contribute(category: string, url: string, description: string) {
    await axios.post("/api/v1/contribute", { category, url, description });
}

export async function search(query: string) {
    return axios.get(`/api/search?q=${query}`);
  }