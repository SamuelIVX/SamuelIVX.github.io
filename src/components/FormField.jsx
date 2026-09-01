/**
 * Reusable form field with label, input/textarea, and consistent styling.
 * @param {object} props
 * @param {string} props.label - Label text
 * @param {string} props.name - Input name attribute
 * @param {string} props.type - Input type (text, email, etc.)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} props.value - Controlled value
 * @param {function} props.onChange - Change handler
 * @param {number} [props.rows] - Rows for textarea
 * @returns {JSX.Element}
 */
import PropTypes from "prop-types";

const FormField = ({ label, name, type = "text", placeholder, value, onChange, rows }) => {
  const isTextarea = type === "textarea";
  const inputProps = {
    type: isTextarea ? undefined : type,
    name,
    value,
    onChange,
    placeholder,
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
  };

  if (isTextarea) {
    delete inputProps.type;
    inputProps.rows = rows || 7;
  }

  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {isTextarea ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
    </label>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
};

export default FormField;