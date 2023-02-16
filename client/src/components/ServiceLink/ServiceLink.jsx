import { useNavigate } from 'react-router-dom';
import { Service } from './style';

const ServiceLink = ({ groupName, path, src }) => {
    const navigate = useNavigate();

    return(
    <Service onClick={() => navigate(path)}>
        <img
            src={src}
            alt={groupName}
        />
        <h2><span>&nbsp;{groupName}&nbsp;</span></h2>
    </Service>
    )
};

export default ServiceLink;
