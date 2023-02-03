import axios from "axios";

export default class PostService {
  static async getAll() {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const limit: number = 50;

    const response = await axios.get(url, {
      params: {
        limit: limit,
        page: 1
      },
    });

    return response.data;
  }
}
