import { Link } from "react-router-dom";
import logo from "./images/logo.gif";

import { Logo } from "../styles";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/">
          <Logo alt="Foodiez" src={logo} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/categories" class="nav-link">
                Categories
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ingredients" class="nav-link">
                Ingredients
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/recipes" class="nav-link">
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
