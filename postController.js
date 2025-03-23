const posts = [
    {id: 1, title: 'Post 1', content: 'This is post 1'},
    {id: 2, title: 'Post 2', content: 'This is post 2'},
    {id: 3, title: 'Post 3', content: 'This is post 3'},
    {id: 4, title: 'Post 4', content: 'This is post 4'},
];

const getPosts = ()=> posts;

export const getPostLength = ()=> posts.length; 
export default getPosts;