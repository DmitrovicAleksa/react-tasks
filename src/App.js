import "./App.css";
import ExapmleState from "./components/ExapmleState";
import ExampleEff from "./components/ExampleEffect";
import React, { useContext, useEffect } from "react";
import { Signup } from "./components/Signup";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./redux/counter/counter.actions";
import { getUser } from "./redux/user/user.actions";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  console.log(user);

  const increase = () => {
    dispatch(increaseCounter());
  };
  const decrease = () => {
    dispatch(decreaseCounter());
  };
  return (
    <div className="App">
      <div>
        <ExapmleState />
        <ExampleEff />
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
      <div>
        <Signup />
      </div>
      <div>Count: {counter}</div>
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
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
