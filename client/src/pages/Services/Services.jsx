import ServiceLink from '../../components/ServiceLink/ServiceLink';
import Layout from '../../components/Layout/Layout';
import LeafPanel from '../../components/LeafPanel/LeafPanel';
import coaching from '../../resources/coaching.png';
import groups from '../../resources/groups.png';
import immersion from '../../resources/immersion.png';
import { ServiceTypes, ServicesContainer, TitleContainer } from './style';


const Services = () => {

    return (
        <Layout>
            <ServiceTypes>
                <TitleContainer>
                    <h1>What We Offer</h1>
                </TitleContainer>
                <ServicesContainer>
                    <ServiceLink src={coaching} path='/services/coaching' groupName='1:1 Coaching & Counseling' />
                    <ServiceLink src={groups} path='/services/groups' groupName='Groups' />
                    <ServiceLink src={immersion} path='/services/experiences'  groupName='Immersive Experiences' />
                </ServicesContainer>
            </ServiceTypes>
            <LeafPanel />
        </Layout>
    );
};

export default Services;
