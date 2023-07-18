import logo from './logo.svg';
import './App.css';
import Parent from "./components/Parent"
import Mother from './components/Mother';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState('')

  const example2 = (text) => {
    setInfo(text)
  }
  return (
    <div className="App">
      <Parent alertAppJs={example2} />
      <br />
      <Mother info={info} />

    </div>
  );
}

export default App;
