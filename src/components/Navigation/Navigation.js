import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Get A Quote</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 70%;
  ul {
    height: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: #f8f9fa;
    text-decoration: none;
    font-weight: 500;
  }
`;

export default Navigation;
