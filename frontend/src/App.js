import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1> welcome to my online store brother</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
