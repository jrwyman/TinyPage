import axios from 'axios';

export const getPosts = () => {
    return axios.get('/posts')
};

export const getUserPosts = id => {
    return axios.get(`/posts/user/${id}`)
};

export const writePost = data => {
    return axios.post('/posts/', data)
}