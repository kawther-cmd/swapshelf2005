import "./Container.css";

/** Centers content and limits its width. Use `size="narrow"` for forms. */
function Container({ children, size = "default", className = "" }) {
  return <div className={`container container--${size} ${className}`.trim()}>{children}</div>;
}

export default Container;
