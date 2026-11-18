import "./FormField.css";

/**
 * Labelled input with an error message underneath.
 * Pass `error` (string) to show a validation message.
 */
function FormField({ id, label, type = "text", value, onChange, onBlur, error, autoComplete, placeholder, children }) {
  const errorId = `${id}-error`;

  return (
    <div className={"form-field" + (error ? " form-field--invalid" : "")}>
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <div className="form-field__control">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          className="form-field__input"
        />
        {children}
      </div>
      {error && (
        <p id={errorId} className="form-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
