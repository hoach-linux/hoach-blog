import axios from "axios";

export default class PostService {
  static async getAll() {
    const access_key = "b6aaa32f3ef8d6015d0fd6496183e049";
    const url = "http://api.mediastack.com/v1/news";
    const response = await axios.get(url, {
      params: {
        access_key: access_key,
        languages: "en",
        limit: 100,
        keywords: "crypto"
      },
    });

    return response.data.data;
  }
}
