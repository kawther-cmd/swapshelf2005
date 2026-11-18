import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import "./About.css";

const STEPS = [
  {
    number: "01",
    title: "Share your shelf",
    text: "List the books you have finished and are happy to pass on to another reader.",
  },
  {
    number: "02",
    title: "Find your next read",
    text: "Browse what people in your community are offering and pick something new.",
  },
  {
    number: "03",
    title: "Swap or borrow",
    text: "Trade a book for a book, or borrow one and return it when you are done.",
  },
];

const VALUES = [
  { title: "Less waste", text: "Every swapped book is one less book bought new or thrown away." },
  { title: "More reading", text: "Reading gets cheaper when good books keep moving between readers." },
  { title: "Closer community", text: "Meet readers nearby and share recommendations along the way." },
];

/** About page - explains the Swap Shelf idea. */
function About() {
  return (
    <div className="about">
      <section className="about__hero">
        <Container>
          <p className="about__eyebrow">About Swap Shelf</p>
          <h1 className="about__title">
            Books are meant to be read, <em>not</em> left on a shelf.
          </h1>
          <p className="about__lead">
            Swap Shelf is a community platform where readers swap, share and borrow books with each
            other. Instead of collecting dust, the books you have already read can find a new home
            &mdash; and you can discover your next favourite without buying it new.
          </p>
        </Container>
      </section>

      <section className="about__section" aria-labelledby="how-it-works">
        <Container>
          <h2 id="how-it-works" className="about__section-title">How it works</h2>
          <ol className="about__steps">
            {STEPS.map((step) => (
              <li key={step.number} className="about__step">
                <span className="about__step-number">{step.number}</span>
                <h3 className="about__step-title">{step.title}</h3>
                <p className="about__step-text">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="about__section about__section--tinted" aria-labelledby="why-swap">
        <Container>
          <h2 id="why-swap" className="about__section-title">Why swap books?</h2>
          <div className="about__values">
            {VALUES.map((value) => (
              <div key={value.title} className="about__value">
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="about__section">
        <Container>
          <div className="about__cta">
            <h2 className="about__cta-title">Ready to join the shelf?</h2>
            <p className="about__cta-text">Create a free account to start sharing your books.</p>
            <div className="about__cta-actions">
              <Link to="/register" className="about__cta-button about__cta-button--solid">Create an account</Link>
              <Link to="/login" className="about__cta-button about__cta-button--ghost">I already have one</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
