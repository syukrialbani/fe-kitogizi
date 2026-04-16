import { AppBar } from './components/common/AppBar';
import { HeroSection } from './components/common/HeroSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppBar />
      <main className="main-content">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
