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
  try {
    const response = await axios.post('/posts/', data);
    return response.data;
  } catch (e) {
    throw new Error('Error creating post', e);
  }
};

export const likePost = async (id) => {
  try {
    // eslint-disable-next-line no-unused-vars
    await axios.patch(`/posts/${id}/like`);
  } catch (e) {
    throw new Error('Error liking post', e);
  }
};
