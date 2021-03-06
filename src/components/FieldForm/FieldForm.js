import styled from 'styled-components';

import ErrorMsgBlock from 'components/ErrorMsg/ErrorMsg';

const FieldForm = ({ formik, name, type, children }) => {
  return (
    <Field>
      <label className="field-label" htmlFor={name}>
        <input
          id={name}
          className="field-input"
          type={type}
          {...formik.getFieldProps(name)}
        />
      </label>

      {formik.touched[name] && formik.errors[name] ? (
        <ErrorMsgBlock className="field-error">
          {formik.errors[name]}
        </ErrorMsgBlock>
      ) : null}
    </Field>
  );
};

const Field = styled.div`
  .field-input {
    display: block;
    width: 95%;
    margin-top: 10px;
    border: 0;
    outline: 0;
    padding: 10px 0;
    font-size: 18px;
  }
`;

export default FieldForm;
