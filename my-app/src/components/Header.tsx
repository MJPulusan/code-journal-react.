import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar column-full">
            <span>Code Journal</span>

            <Link to={'/entries'} className="nav-item">
              Entries
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
