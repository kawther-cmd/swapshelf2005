import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import "./Home.css";

/**
 * Simple placeholder for the Home route.
 * The real Home page is built by another team member and replaces this file.
 */
function Home() {
  return (
    <section className="home-placeholder">
      <Container>
        <p className="home-placeholder__eyebrow">Home</p>
        <h1 className="home-placeholder__title">Welcome to Swap Shelf</h1>
        <p className="home-placeholder__text">
          This is a placeholder. The team&apos;s Home page will be placed here.
        </p>
        <div className="home-placeholder__actions">
          <Link to="/about" className="home-placeholder__link">Learn about Swap Shelf</Link>
        </div>
      </Container>
    </section>
  );
}

export default Home;
