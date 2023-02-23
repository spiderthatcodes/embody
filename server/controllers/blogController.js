const asyncHandler = require('express-async-handler');

const Blog = require('../models/blogModel');

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
});

const createBlog = asyncHandler(async (req, res) => {
    if (!req.body.text || !req.body.title) {
        res.status(400);
        throw new Error('Title and text are required');
    }

    const blog = await Blog.create({
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.url || null,
    });

    res.status(200).json(blog);
});

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json(blog);
});

module.exports = {
    getAllBlogs,
    createBlog,
    deleteBlog
};
