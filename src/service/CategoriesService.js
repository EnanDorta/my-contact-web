import HttpClient from "./utils/Httpclient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listCategories() {
    return this.httpClient.get("/categories");
  }

}
/* eslint-disable-next-line */
export default new CategoriesService();
