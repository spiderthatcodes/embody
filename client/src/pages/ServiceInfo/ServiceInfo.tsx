import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import LeafPanel from '../../components/LeafPanel/LeafPanel';
import services from '../../constants/serviceInfo';
import Button from '../../components/Button/Button';
import { ServicePanel, ImageSide, Container } from './style';

const ServiceInfo: FC = () => {
    const { name } = useParams();
    const [serviceName, setServiceName] = useState<string>('')

    useEffect(() => {
        if (name) {
            setServiceName(name)
        }
    }, [name, serviceName])

    return (
        <Layout>
            <Container>
                <div id='stripe'>
                    <p id='text'>{services[serviceName].stripe}</p>
                </div>
                <h1 id='title'><span>&nbsp;{services[serviceName].title}&nbsp;</span></h1>
                        <p id='description'>{services[serviceName].description}</p>
                        {name === 'coaching' && (
                            <p id='bullets'>
                                <strong>
                                    Relationships &bull; Career &bull; Parenting
                                    &bull; Starting Over &bull; Overall
                                    Wellbeing &bull; Stress &bull; Self Esteem
                                    &bull; Divorce &bull; Relocation.
                                </strong>
                            </p>
                        )}
                        <div id='button'>
                            <Button
                                text='Contact Us'
                                route='/contact'
                            />
                        </div>
                <ServicePanel>
                    <ImageSide>
                        <img
                            src={services[serviceName].src}
                            alt={services[serviceName].title}
                        />
                    </ImageSide>
                </ServicePanel>
            </Container>
            <LeafPanel />
        </Layout>
    );
};

export default ServiceInfo;
