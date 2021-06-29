import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Domble</h1>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
