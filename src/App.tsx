import React from 'react';
import s from './App.module.css';
import PlayersContainer from "./Components/Players/PlayersContainer";
import MenuContainer from "./Components/Menu/MenuContainer";

function App() {
  return (
    <div className={s.container}>
      <MenuContainer/>
        <PlayersContainer/>
    </div>
  );
}

export default App;
