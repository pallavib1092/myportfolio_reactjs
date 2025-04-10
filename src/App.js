
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <div style={{ display: 'flex' }}>
          <Drawer />
          <div style={{ marginLeft: 200, padding: 20 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Drawer />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
