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
    return 0;
  }
  const mostLikedBlog = Math.max(...arrayOfBlogs.map(blog => blog.likes));
  const favourite = arrayOfBlogs.find(blog => blog.likes === mostLikedBlog);
  console.log('Favourite blog: ', favourite);
  return favourite;
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
};