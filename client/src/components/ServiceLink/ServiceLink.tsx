import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { Service } from './style';

interface ServiceLinkProps {
    groupName: string;
    path: string;
    src: string;
}

const ServiceLink: FC<ServiceLinkProps> = ({ groupName, path, src }) => {
    const navigate: any = useNavigate();

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
