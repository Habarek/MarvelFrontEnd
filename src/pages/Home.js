import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <p>Personnages</p>
      <Link to="/characters">
        <div className="perso"></div>
      </Link>
      <p>Comics</p>
      <Link to="/comics">
        <div className="BD"></div>
      </Link>
      <p>Favories</p>
      <Link to="/favorites">
        <div className="Fav"></div>
      </Link>
    </div>
  );
};
export default Home;
