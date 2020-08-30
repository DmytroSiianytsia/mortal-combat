import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ChooseHero from './components/choose_hero/ChooseHero'
import VsScreen from './components/vs_screen/VsScreen';

const App = () => {
  let [player1, setPlayer1] = useState(0)
  
  return (
    <div className="App">
      <div className="choose_hero">
        <div className="container">
          <div className="field">
            <Switch>
              <Route path="/vs">
                <VsScreen player1={player1}/>
              </Route>
              <Route path="/" exact>
                <ChooseHero setPlayer1={setPlayer1}/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
