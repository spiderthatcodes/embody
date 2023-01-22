import Layout from '../../components/Layout/Layout';
import LeafPanel from '../../components/LeafPanel/LeafPanel';
import { ServiceTypes, ServicesContainer, Service } from './style';
import leaves from '../../resources/leaves.jpg';

const ServiceInfo = ({ groupName }) => (
    <Service>
        <img
            src={leaves}
            alt='leaves'
        />
        <h2>{groupName}</h2>
    </Service>
);

const Services = () => {
    return (
        <Layout>
            <ServiceTypes>
                <h1>What We Offer</h1>
                <ServicesContainer>
                    <ServiceInfo groupName='1:1 Coaching & Counseling' />
                    <ServiceInfo groupName='Groups' />
                    <ServiceInfo groupName='Immersive Experiences' />
                </ServicesContainer>
            </ServiceTypes>
            <LeafPanel />
        </Layout>
    );
};

export default Services;
