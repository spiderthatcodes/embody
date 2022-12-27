import { useNavigate } from 'react-router-dom';
import { BlackButton } from './style';

const Button = ({ text, route }) => {
    const navigate = useNavigate();

    return <BlackButton onClick={() => navigate(route)}>{text}</BlackButton>;
};

export default Button;
