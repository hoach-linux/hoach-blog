import axios from "axios";

export default class PostService {
  static async getAll() {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const limit: number = 50;

    const response = await axios.get(url, {
      params: {
        _limit: limit,
        _page: 1,
      },
    });

    return response.data;
  }
  static async getById(id: string | undefined) {
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(`${url}/${id}`);

    return response.data;
  }
  static async getCommentsByPostId(id: string | undefined) {
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(`${url}/${id}/comments`);

    return response.data;
  }
}
