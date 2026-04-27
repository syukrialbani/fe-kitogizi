import { AppBar } from './components/common/AppBar';
import { HeroSection } from './components/common/HeroSection';
import './App.css';
import { AboutUs } from './components/common/AboutUs';
import { OurTraction } from './components/common/OurTraction';
import OurService from './components/common/OurServices/OurService';

function App() {
  return (
    <div className="app">
      <AppBar />
      <main className="main-content">
        <HeroSection />
        <AboutUs />
        <OurTraction />
        <OurService />
      </main>
    </div>
  );
}

export default App;
