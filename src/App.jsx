import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Flashsales from './components/Flashsales';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top/>
    <Navigation/>
    <Hero/>
    <Flashsales/>
    </>
  )
}

export default App
