export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Crypto App</a>
      </div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <a href="/top10">Top 10</a>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
