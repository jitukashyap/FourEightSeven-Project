// Import app style
import './App.css';

// Import section components
import Announcement from './sections/Announcement';
import Navigation from './sections/Navigation';
import Product from './sections/Product';

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
