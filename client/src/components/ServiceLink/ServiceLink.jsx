import { useNavigate } from 'react-router-dom';
import leaves from '../../resources/leaves.jpg';
import { Service } from './style';

const ServiceLink = ({ groupName, path }) => {
    const navigate = useNavigate();

    return(
    <Service onClick={() => navigate(path)}>
        <img
            src={leaves}
            alt='leaves'
        />
        <h2>{groupName}</h2>
    </Service>
    )
};

export default ServiceLink;
