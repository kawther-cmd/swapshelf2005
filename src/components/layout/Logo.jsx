import { Link } from "react-router-dom";
import "./Logo.css";

/** Swap Shelf logo mark + name. Links back to the home page. */
function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label="Swap Shelf home">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="var(--color-primary)" />
        <rect x="14" y="16" width="9" height="32" rx="2" fill="var(--color-paper)" />
        <rect x="26" y="12" width="9" height="36" rx="2" fill="var(--color-highlight)" />
        <rect
          x="38"
          y="18"
          width="9"
          height="30"
          rx="2"
          fill="var(--color-accent)"
          transform="rotate(10 42 33)"
        />
        <rect x="10" y="49" width="44" height="4" rx="2" fill="var(--color-paper)" />
      </svg>
      <span className="logo__text">
        Swap <span className="logo__text-accent">Shelf</span>
      </span>
    </Link>
  );
}

export default Logo;
