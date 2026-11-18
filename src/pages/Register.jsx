import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import FormField from "../components/common/FormField.jsx";
import PasswordField from "../components/common/PasswordField.jsx";
import Button from "../components/common/Button.jsx";
import { MIN_PASSWORD_LENGTH, validateRegister } from "../utils/validation.js";
import { registerUser } from "../services/authService.js";
import "./Auth.css";

const INITIAL_VALUES = { name: "", email: "", password: "", confirmPassword: "" };

/** Register page: name, email, password, confirm password + matching validation. */
function Register() {
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
    if (touched[name] || (name === "password" && touched.confirmPassword)) {
      setErrors(validateRegister(next));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateRegister(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateRegister(values);
    setErrors(formErrors);
    setTouched({ name: true, email: true, password: true, confirmPassword: true });

    if (Object.keys(formErrors).length > 0) {
      setNotice({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    setSubmitting(true);
    const result = await registerUser(values);
    setSubmitting(false);

    if (!result.connected) {
      setNotice({
        type: "info",
        text: "Your details look good. Creating your account will work once the backend is connected.",
      });
    }
  };

  return (
    <section className="auth">
      <Container size="narrow">
        <div className="auth__card">
          <h1 className="auth__title">Create your account</h1>
          <p className="auth__subtitle">Join Swap Shelf and start sharing your books.</p>

          {notice && (
            <p className={`auth__notice auth__notice--${notice.type}`} role="status">
              {notice.text}
            </p>
          )}

          <form className="auth__form" onSubmit={handleSubmit} noValidate>
            <FormField
              id="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name ? errors.name : ""}
              autoComplete="name"
              placeholder="Your full name"
            />
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
              autoComplete="new-password"
              placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
            />
            <PasswordField
              id="confirmPassword"
              label="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword ? errors.confirmPassword : ""}
              autoComplete="new-password"
              placeholder="Repeat your password"
            />
            <Button type="submit" fullWidth className="auth__submit" disabled={submitting}>
              {submitting ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="auth__switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Register;
