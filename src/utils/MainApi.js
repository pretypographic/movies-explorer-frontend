import Api from "./Api"
import { BASE_URL_MAIN } from "./constants";

class MainApi extends Api {
  constructor({baseUrl, headers}) {
    super({baseUrl, headers})
  }

  createUser(user) {
    return super._sendRequest("POST", user, "/signup");
  }

  authorizeUser(user) {
    return super._sendRequest("POST", user, "/signin");
  }

  closeUserSession() {
    return super._sendRequest("POST", false, "/signout");
  }

  getUser() {
    return super._sendRequest("GET", false, "/users/me");
  }

  patchUser(user) {
    return super._sendRequest("PATCH", user, "/users/me");
  }
};

const mainApi = new MainApi({
  BASE_URL_MAIN,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default mainApi;