import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header" data-testid="header">
      <h1 className="header-title">
        <Link className="nav-link" to="/">
          Politician Dictionary
        </Link>
      </h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Politicians</li>
          <li className="header-nav-item">
            <Link
              className="nav-link"
              to="/congress"
              data-testid="congress-link"
            >
              Congress
            </Link>
          </li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
