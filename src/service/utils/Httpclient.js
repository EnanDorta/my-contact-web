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
    await delay(500);

    const headers = new Headers()

    if (options.body) {
      headers.append("Content-Type", "application/json")
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value)
      })
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers
    });

    let body = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType.includes("application/json")) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(
      body?.error || `${response.status} - ${response.statusText}`,
      response
    );
  }
}

export default HttpClient;
