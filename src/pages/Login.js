import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Connection</h1>
      <form action="">
        <input type="email" placeholder="wolwerine@marvel.com" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit"> Se connecter</button>
      </form>

      <Link to="/signup">Tu n'as pas encore de compte inscris-toi!</Link>
    </div>
  );
};
export default Login;
