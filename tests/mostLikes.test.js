const mostLikes = require('../utils/list_helper').mostLikes;

describe('Most likes', () => {
  const singleBlog = [
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }
  ];

  const blogs = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a422b891b54a676234d17fa',
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422ba71b54a676234d17fb',
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676234d17fc',
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      __v: 0
    },
  ];

  const newBlogs = [...blogs, {
    _id: '5a422bc61b54a676234d17f9',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 99,
    __v: 0
  }];

  test('of a single array returns the sole likes', () => {
    expect(mostLikes(singleBlog)).toEqual({ author: 'Edsger W. Dijkstra', likes: 12 });
  });

  test('of an array returns the author with the most likes', () => {
    expect(mostLikes(blogs)).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 });
  });

  test('of an array returns the author with the most likes', () => {
    expect(mostLikes(newBlogs)).toEqual({ author: 'Robert C. Martin', likes: 111 });
  });

  test('with an argument that isn\'t an Array returns an Error', () => {
    expect(mostLikes('Gello')).toEqual(Error('Argument must be passed an array'));
  });

  test('with an argument that is an Object returns an Error', () => {
    expect(mostLikes(new Object())).toEqual(Error('Argument must be passed an array'));
  });

  test('with no argument passed returns an Error', () => {
    expect(mostLikes()).toEqual(Error('An Array argument must be provided'));
  });

  test('with a false argument returns an Error', () => {
    expect(mostLikes(undefined || null || false)).toEqual(Error('An Array argument must be provided'));
  });

  test('with a true boolean argument return an Error', () => {
    expect(mostLikes(true)).toEqual(Error('An Array argument must be provided'));
  });
});