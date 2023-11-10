import Api from "./Api"

const baseUrl = "https://api.cu2ewa.nomoredomainsrocks.ru"

class MainApi extends Api {
  constructor({baseUrl, headers}) {
    super(baseUrl, headers)
  }
}

const mainApi = new MainApi({
  baseUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default mainApi;