import styled from 'styled-components';
import { a11yHidden } from 'styles/GlobalStyles';

const Main = ({ title, children, bgColor }) => {
  return (
    <MainContent bgColor={bgColor}>
      <h2>{title}</h2>
      {children}
    </MainContent>
  );
};

const MainContent = styled.main`
  width: 1220px;
  margin: 0 auto;
  background-color: ${({ bgColor }) => bgColor};
  padding: 70px 0 200px;

  h2 {
    ${a11yHidden}
  }
`;

Main.defaultProps = {
  bgColor: '#f8f9fa',
};

export default Main;
