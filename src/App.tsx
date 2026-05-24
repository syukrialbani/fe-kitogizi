import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app/router/AppRouter';
import { ScrollToTop } from './shared/lib/ScrollToTop';
import './app/styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
