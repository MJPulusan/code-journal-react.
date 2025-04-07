import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
    <header>
      <div className="container">
        <nav className="navbar column-full">
          <span>Code Journal</span>
          <a href="#" data-view="entries" className="nav-item">
            <Link to={'/'}> Entries</Link>
          </a>
        </nav>
      </div>
    </header>
    <Outlet/>
    </>
  );
}
