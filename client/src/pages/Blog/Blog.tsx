import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { getBlogs } from '../../features/blogs/blogSlice';
import { BlogType } from '../../types';
import Layout from '../../components/Layout/Layout';

const Blog: FC = () => {
    const blogs: BlogType[] = useSelector((store: RootState) => store?.blogs?.blogs);
    const isMobile: boolean = useSelector(
        (store: RootState) => store?.isMobile?.isMobile
    );
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getBlogs());
    }, [dispatch]);

    console.log(blogs);

    return (
        <Layout isMobile={isMobile} >
            {blogs && blogs.map((blog: BlogType) => <p key={blog._id}>{blog.title}</p>)}
        </Layout>
    );
};

export default Blog;
