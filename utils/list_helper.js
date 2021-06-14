// eslint-disable-next-line no-unused-vars
const dummy = blogsArray => {
  return 1;
};

const totalLikes = arrayOfBlogs => {
  let likes = 0;

  arrayOfBlogs.map(blog => likes += blog.likes);

  return likes;
};

const favouriteBlog = arrayOfBlogs => {
  if(!arrayOfBlogs.length) {
    return undefined;
  }
  return arrayOfBlogs.find(blog => blog.likes === Math.max(...arrayOfBlogs.map(blog => blog.likes)));
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
};