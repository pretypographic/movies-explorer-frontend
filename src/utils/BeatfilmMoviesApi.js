import Api from "./Api"
import { BASE_URL_BF } from "./constants";

class BeatfilmMoviesApi extends Api {
  constructor({baseUrl, headers}) {
    super({baseUrl, headers});
  }
  
  _sendRequest() {
    const options = {
      method: "GET",
      headers: this.headers,
    };
    return fetch(`${this.baseUrl}`, options)
      .then(this._getJSON);
  }

  getMovies() {
    return this._sendRequest();
  }
};

const beatfilmMoviesApi = new BeatfilmMoviesApi({
  baseUrl: BASE_URL_BF,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default beatfilmMoviesApi;