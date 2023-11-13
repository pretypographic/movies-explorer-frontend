import Api from "./Api"

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies"

class MoviesApi extends Api {
  constructor({baseUrl, headers}) {
    super({baseUrl, headers});
  }

  getMovies() {
    return super._sendRequest('GET');
  }
}

const moviesApi = new MoviesApi({
  baseUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default moviesApi;