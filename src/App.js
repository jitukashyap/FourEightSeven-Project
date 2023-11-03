// Import app style
import './App.css';

// Import section components
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Product />
    </div>
  );
}

export default App;
