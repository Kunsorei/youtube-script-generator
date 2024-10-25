import axios from 'axios';

const API_KEY = 'AIzaSyAnGtoVc2dx3TaJLooEOXv5znI5dL2wTCQ';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchTopVideos = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 3,
        order: 'viewCount',
        type: 'video',
        key: API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
