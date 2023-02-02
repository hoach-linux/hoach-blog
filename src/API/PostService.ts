import axios from "axios";

export default class PostService {
  static async getAll() {
    const apiKey = "0182127d10ac471ba19b9ca744430175";
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: "technology",
        sortBy: "popularity",
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data.articles;
  }
}
