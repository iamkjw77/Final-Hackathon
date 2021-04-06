import ErrorMsgBlock from 'components/ErrorMsg/ErrorMsg';
import styled from 'styled-components';

const TextArea = ({ name, formik }) => {
  return (
    <TextAreaBlock>
      <label htmlFor={name}>
        <textarea
          name={name}
          id={name}
          cols="20"
          rows="2"
          onChange={formik.handleChange}
        ></textarea>
      </label>

      {formik.touched[name] && formik.errors[name] ? (
        <ErrorMsgBlock className="field-error">
          {formik.errors[name]}
        </ErrorMsgBlock>
      ) : null}
    </TextAreaBlock>
  );
};

const TextAreaBlock = styled.div`
  textarea {
    display: block;
    width: 95%;
    margin-top: 10px;
    border: 0;
    outline: 0;
    padding: 10px 0;
    font-size: 18px;
  }
`;

export default TextArea;
