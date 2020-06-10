import React from 'react';
import './App.scss';
import profilPic from './images/ProfilPic.png'
import Notation from './composents/notation.js';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="App-Menu">
          <div className="App-Menu-Me">
            <img src={profilPic} alt="Profil Picture"/>
            <h2>Florent Martinez</h2>
            <h4>UX/UI Designer</h4>
          </div>
          <div className="App-Menu-LanguageSkills">
            <div className="App-Menu-LanguageSkills-List">
              <h2>Language Skills</h2>
              <Notation notation={[1,1,1,1,1,1,1,1]} name="Français"></Notation>
              <Notation notation={[1,1,1,1,1,1,0,0]} name="Rapid Prototyping"></Notation>
            </div>
          </div>
        </div>
        <div className="App-Spec">
        </div>
      </div>
    );
  }
}

export default App;
