import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlackButton } from './style';

interface ButtonProps {
    text: string;
    route: string;
}

const Button: FC<ButtonProps> = ({ text, route }) => {
    const navigate: any = useNavigate();

    return <BlackButton onClick={() => navigate(route)}>{text}</BlackButton>;
};

export default Button;
