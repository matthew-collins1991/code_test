const baseUrl = "http://localhost:3000/api/v1/users";

class API {
  static createUser(user) {
    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }
}

window.API = API;

export default API;
