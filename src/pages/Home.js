import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Personnages</h1>
      <Link to="/characters">
        <div>LES PERSONNAGES</div>
      </Link>
      <p>Découvre tout tes personnages préféré de l'univer Marvel</p>

      <Link to="/comics">
        <div>COMICS</div>
      </Link>
      <p>Découvre tout les Comics</p>

      <Link to="/favorites">
        <div>FAVORIS</div>
      </Link>

      <p>Enregistre tout tes favoris dans ton espace privée</p>
    </div>
  );
};
export default Home;
