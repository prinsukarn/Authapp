import axios from "axios";
import { API_KEY } from "@env";

export async function createUser(email, password) {
  console.log(API_KEY);
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
