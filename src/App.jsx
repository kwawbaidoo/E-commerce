import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top/>
    <Navigation/>
    <Hero/>
    </>
  )
}

export default App
