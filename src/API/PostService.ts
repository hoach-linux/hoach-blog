import axios from "axios";
import { getTotalPage } from "../utils/pages";

export default class PostService {
  static async getAll(limit: number) {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";
    const totalCounts = await PostService.getTotalCounts();
    const totalPages = getTotalPage(totalCounts, limit);

    const response = await axios.get(url, {
      params: {
        limit: limit,
        page: totalPages,
        meta: "total_count",
      },
    });

    return [response.data, totalPages];
  }
  static async getById(id: string | undefined) {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";

    const response = await axios.get(`${url}/${id}`);

    return response.data;
  }
  static async getTotalCounts() {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";

    const response = await axios.get(url, {
      params: {
        meta: "total_count",
      },
    });

    return response.data.meta.total_count;
  }
  static async getCommentsByPostId(id: string | undefined) {
    const url: string = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(`${url}/${id}/comments`);

    return response.data;
  }
}
