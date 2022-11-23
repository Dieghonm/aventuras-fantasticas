import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import Aside from './pages/Aside';
import Footer from './pages/Footer';

import * as S from './styles/App'
import Project from './pages/Project';
import AboutUs from './pages/AboutUs';
import NewGame from './pages/NewGame';
import SaveGame from './pages/SaveGame';
import HowToPlay from './pages/HowToPlay';
import Sinopse from './pages/Sinopse';
import CreateCharacter from './pages/CreateCharacter';

function App() {
  return (
    <S.AppDiv>
      <S.Icon><GiHamburgerMenu /></S.Icon>
      <BrowserRouter>
      <Aside />
        <Routes>
          <Route path="/aventuras-fantasticas/NewGame" element={<NewGame />} />
          <Route path="/aventuras-fantasticas/SaveGame" element={<SaveGame />} />
          <Route path="/aventuras-fantasticas/HowToPlay" element={<HowToPlay />} />
          <Route path="/aventuras-fantasticas/AboutUs" element={<AboutUs />} />
          <Route path="/aventuras-fantasticas/sinopse/:book" element={<Sinopse />} />
          <Route path="/aventuras-fantasticas/CreateCharacter" element={<CreateCharacter />} />
          <Route path="/aventuras-fantasticas" element={<Project />} />
          <Route path="*" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </S.AppDiv>
  );
}

export default App;
