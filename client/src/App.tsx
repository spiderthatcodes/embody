import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkIsMobile } from './features/isMobileSlice/isMobileSlice';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

const App: FC = () => {
    const dispatch = useDispatch();

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    useEffect(() => {
        dispatch(checkIsMobile(isMobile));
    }, [dispatch, isMobile]);

    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
                <Route
                    path='/offerings'
                    element={<Services />}
                />
                <Route
                    path='/offerings/:name'
                    element={<ServiceInfo />}
                />
                <Route
                    path='/blog'
                    element={<Blog />}
                />
                <Route
                    path='/contact'
                    element={<Contact />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
            </Routes>
        </Router>
    );
};

export default App;
