import coaching from '../resources/coaching.png';
import groups from '../resources/groups.png';
import immersion from '../resources/immersion.png';

const services: any = {
    coaching: {
        title: '1:1 Coaching',
        description:
            'I work with children, families, parents, and adults to identify goals, set realistic timelines and co-create plans to achieve them.  This is completely customizable and tailored to the individual/group.  I will look at mental, emotional, environmental, and physical factors that may be influencing the way you feel.',
        stripe: 'Anything that needs your attention.',
        src: coaching,
    },
    groups: {
        title: 'Groups',
        description:
            'There is so much power and healing in community. If you are interested in joining a group, check back soon for my current offerings.',
        stripe: 'Coming Soon!',
        src: groups,
    },
    experiences: {
        title: 'Free Resources',
        description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        stripe: 'Coming Soon!',
        src: immersion,
    },
};

export default services;
