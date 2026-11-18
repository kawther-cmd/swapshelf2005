import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Footer.css";

/** Site footer shown on every page through the shared Layout. */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Give your books a second life. Swap, share and borrow with readers near you.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <nav className="footer__nav" aria-label="Account navigation">
          <h2 className="footer__heading">Account</h2>
          <ul className="footer__list">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} Swap Shelf. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
