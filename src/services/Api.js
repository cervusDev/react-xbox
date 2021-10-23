import axios from "axios";
import Cookies from "js-cookie";

export const Api = {
  baseUrl: "http://localhost:8080/",

  login: () => Api.baseUrl + "login",

  // Header de autenticação
  authHeader: `Bearer ${Cookies.get("JWT")}`,

  // Requisição com autenticação do tipo Post
  buildAPiAuhtPostRequest: (url, body) => {
    return axios.post(url, body, {
      headers: {
        'content-type': 'aplication/json'
      }
    });
  },
};
