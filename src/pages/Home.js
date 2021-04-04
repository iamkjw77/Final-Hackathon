import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';

import Header from 'containers/Header/Header';
import Main from 'containers/Main/Main';
import QuoteForm from 'containers/QuoteForm/QuoteForm';
import Footer from 'containers/Footer/Footer';

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main title="Get A Quote">
          <QuoteForm />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div``;

export default Home;
