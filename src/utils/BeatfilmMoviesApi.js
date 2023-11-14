import Api from "./Api"

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies"

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
  baseUrl,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default beatfilmMoviesApi;