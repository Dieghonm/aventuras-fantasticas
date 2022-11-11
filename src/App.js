import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import Aside from './pages/Aside';
import Footer from './pages/Footer';

import * as S from './styles/App'

function App() {
  return (
    <S.AppDiv>
      <BrowserRouter>
        <S.Icon><GiHamburgerMenu /></S.Icon>
        <Routes>
          <Route path="/" component={Aside} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </S.AppDiv>
  );
}

export default App;
