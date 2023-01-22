import ServiceLink from '../../components/ServiceLink/ServiceLink';
import Layout from '../../components/Layout/Layout';
import LeafPanel from '../../components/LeafPanel/LeafPanel';
import { ServiceTypes, ServicesContainer } from './style';


const Services = () => {
    

    return (
        <Layout>
            <ServiceTypes>
                <h1>What We Offer</h1>
                <ServicesContainer>
                    <ServiceLink path='/services/coaching' groupName='1:1 Coaching & Counseling' />
                    <ServiceLink path='/services/groups' groupName='Groups' />
                    <ServiceLink path='services/experiences'  groupName='Immersive Experiences' />
                </ServicesContainer>
            </ServiceTypes>
            <LeafPanel />
        </Layout>
    );
};

export default Services;
