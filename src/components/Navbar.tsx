import Link from './Link/Link';

function Navbar() {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container is-max-desktop">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="./clapper.svg" width="40" height="20" />
            <span className="is-size-3">Mooviez</span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/" activeOnlyWhenExact={true}>
              Home
            </Link>

            <Link
              className="navbar-item"
              to="/favorites"
              activeOnlyWhenExact={true}
            >
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
