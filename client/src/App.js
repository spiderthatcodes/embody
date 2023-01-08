import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog'
import Services from './pages/Services/Services';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:name' element={<ServiceInfo />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/cart' element={<Home />} /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
