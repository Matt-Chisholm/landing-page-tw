import "./App.css";
import { Button } from "@material-tailwind/react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Landing />
      </header>
    </div>
  );
}

export default App;
