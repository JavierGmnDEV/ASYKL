import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import LiquidationSection from '../components/FirstInfo';
import MaritimeTransport from '../components/Info1';
import MaritimeInfo from '../components/Info2';
import SupplyChainServices from '../components/Info3';
import MaritimeSafetyTicker from '../components/MaritimSafetyTicker';
import NavbarMaterial from '../components/NavbarMaterial';
import ScrollToTopButton from '../components/ScrollToUp';

const Home = () => {
  return (
    <div>
     
     
     
     <NavbarMaterial />
      <LiquidationSection/>
      <MaritimeInfo/>
      <MaritimeTransport/>
      <MaritimeSafetyTicker/>
      <Carousel/>

<SupplyChainServices/>

      <ScrollToTopButton />
      <AboutUs id='about-section'/>
      
    </div>
  );
};

export default Home;