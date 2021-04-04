import styled from 'styled-components';

const FieldForm = ({ formik, name, title, type, required, children }) => {
  return (
    <Field>
      <label className="field-label" htmlFor={name}>
        {title}
        {required && ' *'}
      </label>
      {type && (
        <input
          id={name}
          className="field-input"
          type={type}
          {...formik.getFieldProps({ name })}
        />
      )}
      {formik.touched[name] && formik.errors[name] ? (
        <span className="field-error">{formik.errors[name]}</span>
      ) : null}
      {children}
    </Field>
  );
};

const Field = styled.div`
  padding: 20px;
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;

  .field-label {
    display: block;
    color: #adb5bd;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .field-input {
    display: block;
    width: 95%;
    margin-top: 10px;
    border: 0;
    outline: 0;
    padding: 10px 0;
    font-size: 18px;
  }

  .field-error {
    display: inline-block;
    margin-top: 10px;
    color: #c92a2a;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default FieldForm;
