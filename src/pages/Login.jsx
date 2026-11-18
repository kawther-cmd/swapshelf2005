import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import FormField from "../components/common/FormField.jsx";
import PasswordField from "../components/common/PasswordField.jsx";
import Button from "../components/common/Button.jsx";
import { validateLogin } from "../utils/validation.js";
import { loginUser } from "../services/authService.js";
import "./Auth.css";

const INITIAL_VALUES = { email: "", password: "" };

/** Login page: email + password, basic validation, show/hide password. */
function Login() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [notice, setNotice] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    setNotice(null);
    if (touched[name]) setErrors(validateLogin(next));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateLogin(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateLogin(values);
    setErrors(formErrors);
    setTouched({ email: true, password: true });

    if (Object.keys(formErrors).length > 0) {
      setNotice({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    setSubmitting(true);
    const result = await loginUser(values);
    setSubmitting(false);

    if (!result.connected) {
      setNotice({
        type: "info",
        text: "Your details look good. Signing in will work once the backend is connected.",
      });
    }
  };

  return (
    <section className="auth">
      <Container size="narrow">
        <div className="auth__card">
          <h1 className="auth__title">Welcome back</h1>
          <p className="auth__subtitle">Log in to your Swap Shelf account.</p>

          {notice && (
            <p className={`auth__notice auth__notice--${notice.type}`} role="status">
              {notice.text}
            </p>
          )}

          <form className="auth__form" onSubmit={handleSubmit} noValidate>
            <FormField
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email ? errors.email : ""}
              autoComplete="email"
              placeholder="you@example.com"
            />
            <PasswordField
              id="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password ? errors.password : ""}
              autoComplete="current-password"
              placeholder="Your password"
            />
            <Button type="submit" fullWidth className="auth__submit" disabled={submitting}>
              {submitting ? "Logging in..." : "Log in"}
            </Button>
          </form>

          <p className="auth__switch">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Login;
