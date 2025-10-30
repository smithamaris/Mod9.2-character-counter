// import { useState } from 'react'
import './App.css'
import CharacterCounter from './Components/CharacterCounter';
import ColorPicker from './Components/ColorPicker';
// import ColorInput from './Components/ColorInput';
import ContentSwitcher from './Components/ContentSwitcher';
import Toggler from './Components/Toggler';




function App() {
  


  return(
    <div style={{ fontFamily: 'sans-serif', maxWidth: 500, margin: '0 auto', padding: 2 }}>
      <h1>Character Counter App</h1>

      <ColorPicker />

      <hr />
      < Toggler />

      <hr />
      < ContentSwitcher />

      <CharacterCounter minWords={0} maxWords={100} targetReadingTime={1} />

    </div>
  );
}

export default App;

//------------------------------------------------------------------------------------------------


