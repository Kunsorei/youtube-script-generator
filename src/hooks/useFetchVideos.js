import { useState, useEffect } from 'react';
import { fetchTopVideos } from '../services/youtubeService';

const useFetchVideos = (query) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedVideos = await fetchTopVideos(query);
        setVideos(fetchedVideos);
      } catch (err) {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getVideos();
    }
  }, [query]);

  return { videos, loading, error };
};

export default useFetchVideos;
