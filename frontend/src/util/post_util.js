import axios from 'axios';

export const getPosts = () => axios.get('/posts');

export const getUserPosts = (id) => axios.get(`/posts/user/${id}`);

export const writePost = (data) => axios.post('/posts/', data);
