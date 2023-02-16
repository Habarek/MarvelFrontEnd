import logo from "../images/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="navigation">
        <Link to="/login">
          <button>Connection/Inscription</button>
        </Link>
        <Link to="/characters">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/favorites">
          <button>Favories</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
