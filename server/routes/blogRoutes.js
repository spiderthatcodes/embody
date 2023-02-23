const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.post('/new-blog', protect, createBlog);
router.get('/', getAllBlogs);
router.delete('/delete/:id', protect, deleteBlog)

module.exports = router;
