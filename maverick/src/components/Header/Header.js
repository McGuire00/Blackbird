import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Politician Dictionary</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Politicians</li>
          <li className="header-nav-item">Congress</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
