import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/services/:name' element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/cart' element={<Home />} /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
