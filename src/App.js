import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import Aside from './pages/Aside';
import Footer from './pages/Footer';

import * as S from './styles/App'
import Main from './pages/Main';

function App() {
  return (
    <S.AppDiv>
      <S.Icon><GiHamburgerMenu /></S.Icon>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aside />} />
          <Route path="*" element={<Aside />} />
        </Routes>
      </BrowserRouter>
      <Main />
      <Footer />
    </S.AppDiv>
  );
}

export default App;
