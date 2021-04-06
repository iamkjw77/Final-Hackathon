import styled from 'styled-components';

const Checkbox = ({ name, label, formik }) => {
  return (
    <CheckboxBlock>
      <input
        id={`ck-${label}`}
        type="checkbox"
        name={name}
        value={label}
        onChange={formik.handleChange}
      />
      <label htmlFor={`ck-${label}`}>{label}</label>
    </CheckboxBlock>
  );
};

const CheckboxBlock = styled.div`
  display: inline-block;
  padding: 10px 15px 5px 0;

  input {
    margin-right: 5px;
  }

  label {
    color: #495057;
    font-size: 15px;
  }
`;

export default Checkbox;
