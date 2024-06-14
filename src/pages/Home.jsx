import BestSellingMonth from "../components/BestSellingMonth";
import Category from "../components/Category";
import Flashsales from "../components/Flashsales";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Top from "../components/Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Navigation />
      <Hero />
      <Flashsales />
      <Category />
      <BestSellingMonth />
      <Footer />
    </div>
  );
};

export default Home;
