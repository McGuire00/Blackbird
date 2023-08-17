import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Politician Dictionary</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Politicians</li>
          <li className="header-nav-item">
            <Link to="/congress">Congress</Link>
          </li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
