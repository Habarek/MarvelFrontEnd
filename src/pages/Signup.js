import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(true);

  const navigate = useNavigate();
  // State qui envoi un message d'erreur en cas d'erreur programmer dans le catch du try/catch de la requête
  const [errorMessage, setErrorMessage] = useState("");
  const fechToken = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email: email,
        username: username,
        password: password,
      });
      if (response.data.token) {
        // je stock la valeur dans la variable token
        setToken(response.data.token);

        // je créer le cookie
        Cookies.set("token", token, { expires: 7 });
        // Je redirige sur la page d'acceuil
        // navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      // envoiyer dans la console le status de l'error
      console.log(error.response.status);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // j'appel ma fonction quand je clic sur le bouton s'inscrire
          fechToken();
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="venom"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="venom@marvel.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};
export default Signup;
