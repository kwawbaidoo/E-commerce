import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Flashsales from './components/Flashsales';
import Category from './components/Category';
import BestSellingMonth from './components/BestSellingMonth';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Top/>
    <Navigation/>
    <Hero/>
    <Flashsales/>
    <Category/>
    <BestSellingMonth/>
    <Footer/>
    </div>
  )
}

export default App
