import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './Videos.css';

// Video assets imports
import wedding1 from '../assets/Gallery/Videos/wedding1.mp4';
import wedding2 from '../assets/Gallery/Videos/wedding2.mp4';
import wedding3 from '../assets/Gallery/Videos/wedding3.mp4';
import thumb1 from '../assets/Gallery/Videos/wedding1.png';
import thumb2 from '../assets/Gallery/Videos/wedding2.png';
import thumb3 from '../assets/Gallery/Videos/wedding3.png';

// Video data
const VIDEO_DATA = [
  {
    id: 1,
    title: "Bruce & Maria's Wedding",
    url: wedding1,
    thumbnail: thumb1,
    portrait: true,
    duration: "1:37",
    date: "June 12, 2024"
  },
  {
    id: 2,
    title: "Jonathan & Comfort's Wedding",
    url: wedding2,
    thumbnail: thumb2,
    portrait: false,
    duration: "00:50",
    date: "August 5, 2024"
  },
  {
    id: 3,
    title: "Websater & Hamidah's Introduction",
    url: wedding3,
    thumbnail: thumb3,
    portrait: true,
    duration: "2:38",
    date: "September 20, 2024"
  }
];

// Video Card Component 
const VideoCard = ({ video }) => (
  <div className={`video-card ${video.portrait ? 'portrait' : 'landscape'}`}>
    <div className="video-wrapper">
      <ReactPlayer
        url={video.url}
        light={video.thumbnail}
        width="100%"
        height="100%"
        controls
        playIcon={
          <div className="play-icon">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </div>
        }
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              disablePictureInPicture: true
            }
          }
        }}
      />
    </div>
    <div className="video-info">
      <h3>{video.title}</h3>
      <div className="video-meta">
        <span className="video-duration">{video.duration}</span>
        <span className="video-date">{video.date}</span>
      </div>
    </div>
  </div>
);

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    portrait: PropTypes.bool.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

// Videos Main Component
const Videos = () => {
  // To filter out any videos with missing assets
  const availableVideos = VIDEO_DATA.filter(video => video.url && video.thumbnail);

  return (
    <main>
      <div className="video-description">
        <h2>Our Events Videos</h2>
      </div>
      
      <div className="videos-container">
      {availableVideos.length > 0 ? (
        <section className="video-grid-container">
          <div className="video-grid">
            {availableVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      ) : (
        <div className="no-videos">
          <p>No videos available at the moment.</p>
          <p>Please check your video file paths and try again.</p>
        </div>
      )}
      </div>
    </main>
  );
};

export default Videos;

