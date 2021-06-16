import './App.css';
import ExapmleState from './components/ExapmleState';
import ExampleEff from './components/ExampleEffect';
import React,{useContext} from 'react';
import { Signup } from './components/Signup';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <div className="App">
      <div>
        <ExapmleState/>
        <ExampleEff/>
        <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
    </div>
    <div>
      <Signup/>
    </div>
    </div>
    
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
