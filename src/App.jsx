import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UseState from './UseState';
import Pets from './Pets';
import UseR from './UseR';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <UseState/>
     <Pets/>
     <UseR/>
    </>
  );
}

export default App;
