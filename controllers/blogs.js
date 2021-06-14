const blogsRouter = require('express').Router();
const Blog = require('../models/BlogSchema');

blogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .then((blogs) => response.json(blogs))
    .catch((err) => next(err));
});

blogsRouter.get('/:id', (request, response, next) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((blog) => response.json(blog))
    .catch((err) => next(err));
});

blogsRouter.post('/', (request, response, next) => {
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((savedBlog) => response.status(201).json(savedBlog.toJSON()))
    .catch((err) => next(err));
});

blogsRouter.delete('/:id', (request, response, next) => {
  const id = request.params.id;
  Blog.findByIdAndRemove(id)
    .then(() => response.status(204).end())
    .catch((err) => next(err));
});

module.exports = blogsRouter;
