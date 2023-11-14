import Api from "./Api"

// const baseUrl = "https://api.cu2ewa.nomoredomainsrocks.ru";
const baseUrl = "http://localhost:5000";

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
  baseUrl,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export default mainApi;