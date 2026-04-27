import { AppBar } from './components/common/AppBar';
import { HeroSection } from './components/common/HeroSection';
import './App.css';
import { AboutUs } from './components/common/AboutUs';
import { OurTraction } from './components/common/OurTraction';
import OurService from './components/common/OurServices/OurService';
import { Portfolio } from './components/common/Portfolio';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <AppBar />
      <main className="main-content">
        <HeroSection />
        <AboutUs />
        <OurTraction />
        <OurService />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
