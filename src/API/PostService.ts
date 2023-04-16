import axios from "axios";
import { getTotalPage } from "../utils/pages";

export default class PostService {
  static async getAll(limit: number, page: number) {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";

    const response = await axios.get(url, {
      params: {
        limit: limit,
        page: page,
      },
    });

    return response.data;
  }
  static async getById(id: string | undefined) {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";

    const response = await axios.get(`${url}/${id}`);

    return response.data;
  }
  static async getLastPage(limit: number) {
    const url: string = "https://directus.hoach.skryonline.com/items/posts";

    const response = await axios.get(url, {
      params: {
        limit: 0,
        meta: "total_count",
      },
    });

    const totalCount = response.data.meta.total_count;
    const totalPages = getTotalPage(totalCount, limit);

    const pages = await axios.get(url, {
      params: {
        limit: limit,
        page: totalPages,
      },
    });

    return [pages.data.data, totalPages] as const;
  }
  static async getImage(id: string | undefined) {
    const url: string = "https://directus.hoach.skryonline.com/assets";

    const response = await axios.get(`${url}/${id}`);

    return response.data;
  }
}
