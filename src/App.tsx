import { AppBar } from './components/common/AppBar';
import { HeroSection } from './components/common/HeroSection';
import './App.css';
import { AboutUs } from './components/common/AboutUs';
import OurService from './components/common/OurServices/OurService';

function App() {
  return (
    <div className="app">
      <AppBar />
      <main className="main-content">
        <HeroSection />
        <AboutUs />
        <OurService />
      </main>
    </div>
  );
}

export default App;
