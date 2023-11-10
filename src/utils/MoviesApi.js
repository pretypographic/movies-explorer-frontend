import Api from "./Api"

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies"

class MoviesApi extends Api {
  constructor({baseUrl, headers}) {
    super(baseUrl, headers)
  }
}

const moviesApi = new MoviesApi({baseUrl});

export default moviesApi;