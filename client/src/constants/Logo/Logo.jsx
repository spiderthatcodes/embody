import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    return <div onClick={navigate('/home')}>
        <h1>Embody</h1>
        <p>Coaching & Counseling</p>
    </div>;
};

export default Logo;
