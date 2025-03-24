import {NavLink, Outlet} from 'react-router'

export function AppLayout() {
  return (
    <>
      <header className="bg-teal-800 text-white">
        <div className="max-width-wrapper flex items-center justify-between gap-2">
          <p>
            Love Movies <span aria-hidden="true">🎥</span>
          </p>
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavLink to="/" className="block p-4">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" className="block p-4">
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="block p-4">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-width-wrapper py-6">
          <Outlet />
        </div>
      </main>
    </>
  )
}
