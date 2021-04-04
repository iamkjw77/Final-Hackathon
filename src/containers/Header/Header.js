import styled from 'styled-components';

import HomeLink from 'components/HomeLink/HomeLink';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <HeaderBar>
      <HomeLink />
      <Navigation></Navigation>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  width: 1220px;
  margin: 0 auto;
  background-color: #343a40;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 10px 30px;
`;

export default Header;
