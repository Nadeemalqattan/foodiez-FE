import { Link } from "react-router-dom";
import logo from "./images/logo.gif";

import { Logo, NavColor } from "../styles";

const NavBar = () => {
  return (
    <div class="container-lg">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link to="/">
            <Logo alt="Foodiez" src={logo} />
          </Link>
          <div id="navbarSupportedContent">
            <ul className="nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavColor to="/" className="nav-link " aria-current="page">
                  Home
                </NavColor>
              </li>
              <li className="nav-item">
                <NavColor to="/categories" className="nav-link">
                  Categories
                </NavColor>
              </li>
              <li className="nav-item">
                <NavColor to="/ingredients" className="nav-link">
                  Ingredients
                </NavColor>
              </li>
              <li className="nav-item">
                <NavColor to="/recipes" className="nav-link">
                  Recipes
                </NavColor>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
