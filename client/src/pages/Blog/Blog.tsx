import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Layout from '../../components/Layout/Layout';

const Blog: FC = () => {
    const blogs = useSelector((store: RootState) => store.blogs.blogs);
    console.log(blogs)

    return (
        <Layout>
            
        </Layout>
    );
};

export default Blog;
