import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { getBlogs } from '../../features/blogs/blogSlice';
import { BlogType } from '../../types';
import Layout from '../../components/Layout/Layout';

const Blog: FC = () => {
    const blogs = useSelector((store: RootState) => store?.blogs?.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getBlogs());
    }, [dispatch]);

    console.log(blogs);

    return (
        <Layout>
            {blogs && blogs.map((blog: BlogType) => <p key={blog._id}>{blog.title}</p>)}
        </Layout>
    );
};

export default Blog;
