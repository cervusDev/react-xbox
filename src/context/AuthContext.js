import { createContext } from "react";
import { Api } from "../services/Api";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  
  // método simples de login
  async function HandleLogin(body) {
    try {
      const response = await Api.buildAPiAuhtPostRequest(Api.login(), body);
      const result = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  // inserir métodos a serem exportados aqui
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
