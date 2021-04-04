import styled from 'styled-components';
import Logo from 'assets/logo.png';

const HomeLink = () => {
  return (
    <HomeLinkBlock>
      <a href="/">
        <img src={Logo} alt="LVPS" />
      </a>
    </HomeLinkBlock>
  );
};

const HomeLinkBlock = styled.h1`
  img {
    width: 100px;
  }
`;

export default HomeLink;
