import axios from "axios";

export default class PostService {
  static async getAll() {
    const access_key = "b6aaa32f3ef8d6015d0fd6496183e049";
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);

    return response.data;
  }
}
