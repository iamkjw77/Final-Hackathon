import styled from 'styled-components';

const FormBlock = ({ title, required, children }) => {
  return (
    <TitleForm>
      <span className="title-label">
        {title}
        {required && ' *'}
      </span>
      {children}
    </TitleForm>
  );
};

const TitleForm = styled.div`
  padding: 20px;
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;

  .title-label {
    display: block;
    color: #adb5bd;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export default FormBlock;
