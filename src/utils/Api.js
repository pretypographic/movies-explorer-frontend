class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _getJSON(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
  }

  _sendRequest(method, body, endpoint = "") {
    const options = {
      method,
      credentials: "include",
      headers: this.headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return fetch(`${this.baseUrl}${endpoint}`, options)
      .then(this._getJSON);
  }
}

export default Api;