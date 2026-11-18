import { useState } from "react";
import FormField from "./FormField.jsx";
import "./PasswordField.css";

/** Password input with a Show / Hide toggle. Accepts the same props as FormField. */
function PasswordField(props) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField {...props} type={visible ? "text" : "password"}>
      <button
        type="button"
        className="password-field__toggle"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? `Hide ${props.label.toLowerCase()}` : `Show ${props.label.toLowerCase()}`}
        aria-pressed={visible}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </FormField>
  );
}

export default PasswordField;
