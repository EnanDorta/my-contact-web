import axios from 'axios'
import delay from "../../utils/delay";
import { toast } from "../../utils/toast";

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

  delete(path, options = {}) {
    return this.makeRequest(path, {
      method: "DELETE",
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

      if (response.data.message) {
        toast({
          text: response.data.message,
          type: "success"
        })

      }

      return response.data

    } catch (error) {
      toast({
        text: error.response.data.error,
        type: "danger",
        duration: 7000
      })

    }
  }
}

export default HttpClient;
