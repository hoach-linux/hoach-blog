import axios from "axios";

export default class PostService {
  static async getAll() {
    const apiKey = "0182127d10ac471ba19b9ca744430175";
    const url = "https://newsdata.io/api/1/news";
    const response = await axios.get(url, {
      params: {
        apikey: "pub_16460fa245da3fedea56f95fc4e2ecef14be7",
        q: "technology",
      },
    });

    return response.data.results;
  }
}
