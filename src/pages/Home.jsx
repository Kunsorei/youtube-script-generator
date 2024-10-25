import React, { useState } from 'react';
import useFetchVideos from '../hooks/useFetchVideos';

const Home = () => {
  const [query, setQuery] = useState('');
  const { videos, loading, error } = useFetchVideos(query);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>YouTube Video Search</h1>
      <form onSubmit={handleSearch} className='mb-4'>
        <input
          type='text'
          name='query'
          placeholder='Search for videos'
          className='border border-gray-300 p-2 w-full'
          required
        />
        <button type='submit' className='bg-blue-500 text-white p-2 mt-2'>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {videos.length > 0 && (
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId} className='mb-4'>
              <h2 className='font-semibold'>{video.snippet.title}</h2>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
