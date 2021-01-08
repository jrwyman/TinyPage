/* eslint-disable no-debugger */
import axios from 'axios';

export const getPosts = async () => {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (e) {
    throw new Error('Error retrieving feed posts', e);
  }
};

export const getUserPosts = async (id) => {
  try {
    const response = await axios.get(`/posts/user/${id}`);
    return response.data;
  } catch (e) {
    throw new Error('Error retrieving profile posts', e);
  }
};

export const writePost = async (data) => {
  const response = await axios.post('/posts/', data);
  return response.data;
};

export const likePost = async (id) => {
  try {
    await axios.patch(`/posts/${id}/like`);
  } catch (e) {
    throw new Error('Error liking post', e);
  }
};

export const commentOnPost = async (id, text) => {
  try {
    const response = await axios.patch(`/posts/${id}/comment`, { text });
    return response.data;
  } catch (e) {
    throw new Error('Error commenting on post', e);
  }
};
