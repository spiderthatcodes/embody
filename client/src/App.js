import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        {/* <Route path='/cart' element={<Home />} /> */}
      </Routes>
      {/* footer */}
    </Router>
  </>
  );
}

export default App;
