import axios from 'axios'
import delay from "../../utils/delay";
import APIError from "../../errors/APIError";

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path, options = {}) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options.headers,
    })
  }

  post(path, options = {}) {
    return this.makeRequest(path, {
      method: "POST",
      headers: options.headers,
      body: options.body,
    })
  }

  async makeRequest(path, options) {
    try {
      await delay(500);

      const response = await axios({
        baseURL: `${this.baseUrl}${path}`,
        method: options.method,
        data: options.body,
      })

      return response.data

    } catch (error) {
      console.log(error)

      throw new APIError(error.message)
    }
  }
}

export default HttpClient;
