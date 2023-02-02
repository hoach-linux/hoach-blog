import axios from "axios";

export default class PostService {
  static async getAll() {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "category=technology&" +
      "sortBy=popularity&" +
      "apiKey=0182127d10ac471ba19b9ca744430175";
    const response = await axios.get(url);

    return response.data.articles;
  }
}
