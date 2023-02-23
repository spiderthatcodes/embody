import axios from 'axios';

const API_URL = '/api/blogs/';

// Create new blog
const createBlog = async (blogData: any, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(
        `${API_URL}new-blog`,
        blogData,
        config
    );

    return response.data;
};

// Get blogs
const getBlogs = async () => {
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }

    const response = await axios.get(API_URL);

    return response.data;
};

// Delete blog
const deleteBlog = async (blogId: any, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${API_URL}delete/` + blogId, config);

    return response.data;
};

const goalService = {
    createBlog,
    getBlogs,
    deleteBlog,
};

export default goalService;
