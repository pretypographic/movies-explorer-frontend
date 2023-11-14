import Api from "./Api"

// const baseUrl = "https://api.cu2ewa.nomoredomainsrocks.ru/movies";
const baseUrl = "http://localhost:5000/movies";

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
  baseUrl,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default moviesApi;