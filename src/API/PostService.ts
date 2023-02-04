import axios from "axios";

export default class PostService {
  static async getAll(limit: number, page: number) {
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url, {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return response;
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
