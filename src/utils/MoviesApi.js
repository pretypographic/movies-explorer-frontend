import Api from "./Api"
import { BASE_URL_MOVIES } from "./constants";

class MoviesApi extends Api {
  constructor({baseUrl, headers}) {
    super({baseUrl, headers});
  }

  getMovies() {
    return super._sendRequest("GET");
  }

  postMovie(movie) {
    return super._sendRequest("POST", movie);
  }

  deleteMovie(id) {
    return super._sendRequest("DELETE", false, `/${id}`)
  }
};

const moviesApi = new MoviesApi({
  BASE_URL_MOVIES,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default moviesApi;