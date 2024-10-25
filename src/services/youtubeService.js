import axios from 'axios';

const API_KEY = 'AIzaSyAnGtoVc2dx3TaJLooEOXv5znI5dL2wTCQ';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const fetchTopVideos = async (query) => {
  try {
    // First API call to search for videos
    const searchResponse = await axios.get(SEARCH_URL, {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 3,
        order: 'viewCount', // Note: order does not apply to search results, but we can retrieve most relevant
        type: 'video',
        key: API_KEY,
      },
    });

    // Extract video IDs from search results
    const videoIds = searchResponse.data.items
      .map((item) => item.id.videoId)
      .join(',');

    // Second API call to fetch video statistics, including view counts
    const statsResponse = await axios.get(VIDEO_URL, {
      params: {
        part: 'statistics',
        id: videoIds,
        key: API_KEY,
      },
    });

    // Combine the search results with their respective statistics
    const videosWithStats = searchResponse.data.items.map((video) => {
      const stats = statsResponse.data.items.find(
        (stat) => stat.id === video.id.videoId
      );
      return {
        ...video,
        statistics: stats ? stats.statistics : {},
      };
    });

    return videosWithStats;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
