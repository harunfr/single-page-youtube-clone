import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import PageBody from './components/PageBody';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageBody />
    </>
  );
}

export default App;
