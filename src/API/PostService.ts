import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: "technology",
        sortBy: "popularity",
        apiKey: "0182127d10ac471ba19b9ca744430175",
      },
    });

    return response.data.articles;
  }
}
