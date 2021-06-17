// eslint-disable-next-line no-unused-vars
const dummy = blogsArray => {
  return 1;
};

const checkData = (array) => {
  if(!array || array === true) {
    return new Error('An Array argument must be provided');
  } else if(!Array.isArray(array)) {
    return new Error('Argument must be passed an array');
  } else if (!array.length) {
    return new Error('Argument must not be an empty array');
  }
};

const totalLikes = arrayOfBlogs => {
  if (checkData(arrayOfBlogs)) {
    return checkData(arrayOfBlogs);
  }
  let likes = 0;
  arrayOfBlogs.map(blog => likes += blog.likes);
  return likes;
};

const favouriteBlog = arrayOfBlogs => {
  if (checkData(arrayOfBlogs)) {
    return checkData(arrayOfBlogs);
  }
  return arrayOfBlogs.find(blog => blog.likes === Math.max(...arrayOfBlogs.map(blog => blog.likes)));
};

const mostBlogs = arrayOfBlogs => {
  if (checkData(arrayOfBlogs)) {
    return checkData(arrayOfBlogs);
  }
  const authors = new Set();
  arrayOfBlogs.map(blog => authors.add(blog.author));
  const copy = [...authors];
  const bloggers = [];
  copy.map(author => bloggers.push({ author, blogs: 0 }));
  bloggers.map(blogger => {
    arrayOfBlogs.map(blog => blogger.author === blog.author ? blogger.blogs++ : blogger.blogs);
  });
  return bloggers.sort((a, b) => a.blogs - b.blogs).pop();
};

const mostLikes = (arrayOfBlogs) => {
  if (checkData(arrayOfBlogs)) {
    return checkData(arrayOfBlogs);
  }
  const authors = new Set();
  arrayOfBlogs.map(blog => authors.add(blog.author));
  const copy = [...authors];
  const bloggers = [];
  copy.map(author => bloggers.push({ author, likes: 0 }));
  bloggers.map(blogger => {
    arrayOfBlogs.map(blog => blogger.author === blog.author ? blogger.likes += blog.likes : blogger.likes);
  });
  return bloggers.sort((a, b) => a.likes - b.likes).pop();
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
};