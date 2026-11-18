import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
];

const AUTH_LINKS = [
  { to: "/login", label: "Login", variant: "ghost" },
  { to: "/register", label: "Register", variant: "solid" },
];

/**
 * Main navigation bar.
 * - Logo / name
 * - Home, About, Login, Register links
 * - Search box (visual only - no search functionality, by design)
 * - Responsive mobile menu (hamburger toggle below 860px)
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const linkClass = ({ isActive }) => "navbar__link" + (isActive ? " navbar__link--active" : "");

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Logo />

        <form
          className="navbar__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="navbar-search" className="visually-hidden">
            Search books
          </label>
          <svg className="navbar__search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            id="navbar-search"
            type="search"
            className="navbar__search-input"
            placeholder="Search books, authors..."
            autoComplete="off"
          />
        </form>

        <button
          type="button"
          className={"navbar__toggle" + (menuOpen ? " navbar__toggle--open" : "")}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <div id="navbar-menu" className={"navbar__menu" + (menuOpen ? " navbar__menu--open" : "")}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__auth">
            {AUTH_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__auth-link navbar__auth-link--${link.variant}` +
                  (isActive ? " navbar__auth-link--active" : "")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
