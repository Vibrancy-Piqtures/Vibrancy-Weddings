import React, { useState } from 'react';
import Fancybox from '../components/Fancybox';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Reviews from '../Components/Reviews';
import './Gallery.css';


// Importing images
import img1 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (1).jpg';
import img2 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (2).jpg';
import img3 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (3).jpg';
import img4 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (4).jpg';
import img5 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (5).jpg';
import img6 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (6).jpg';
import img7 from '../assets/Gallery/Images/Arinda/Kukyala/IMG (7).jpg';
import img8 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (1).jpg';
import img9 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (2).jpg';
import img10 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (3).jpg';
import img11 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (4).jpg';
import img12 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (5).jpg';
import img13 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (6).jpg';
import img14 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (7).jpg';
import img15 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (8).jpg';
import img16 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (9).jpg';
import img17 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (10).jpg';
import img18 from '../assets/Gallery/Images/Diana & Joseph/Kwanjura/IMG (11).jpg';
import img19 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (1).jpg';
import img20 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (2).jpg';
import img21 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (3).jpg';  
import img22 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (4).jpg';
import img23 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (5).jpg';
import img24 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (6).jpg';
import img25 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (7).jpg';
import img26 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (8).jpg';
import img27 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (9).jpg';
import img28 from '../assets/Gallery/Images/Liz & James/Kwanjura/IMG (10).jpg';
import img30 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (1).jpg';
import img29 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (2).jpg';
import img31 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (3).jpg';
import img32 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (4).jpg';
import img33 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (5).jpg';
import img34 from '../assets/Gallery/Images/Sarah & Mike/Kwanjura/IMG (6).jpg';
import img35 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (1).jpg';
import img36 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (2).jpg';
import img37 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (3).jpg';
import img38 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (4).jpg';  
import img39 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (5).jpg';
import img40 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (6).jpg';
import img41 from '../assets/Gallery/Images/Sarah & Mike/Pre-Wedding/IMG (7).jpg';
import img42 from '../assets/Gallery/Images/Anna & Chris/Pre-Wedding/IMG (1).jpg';
import img43 from '../assets/Gallery/Images/Anna & Chris/Pre-Wedding/IMG (2).jpg';
import img44 from '../assets/Gallery/Images/Anna & Chris/Pre-Wedding/IMG (3).jpg';
import img45 from '../assets/Gallery/Images/Anna & Chris/Pre-Wedding/IMG (4).jpg';


// Local image data
const weddingAlbums = [
  {
    id: 'arinda-kukyala',
    title: "Arinda`s Kukyala",
    cover: img1, 
    images: [img1, img2, img3, img4, img5, img6, img7, img7]
  },
  {
    id: 'diana-joseph-kuhingira',
    title: "Diana & Joseph - Kuhingira",
    cover: img8,
    images: [img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18]
  },
  {
    id: 'liz-james-kwanjura',
    title: "Liz & James - Kwanjura",
    cover: img19,
    images: [img19, img20, img21, img22, img23, img24, img25, img26, img27, img28]
  },
  {
    id: 'sarah-mike-kwanjura',
    title: "Sarah & Mike - Kwanjura", 
    cover: img29,
    images: [img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41]
  },
  {
    id: 'sarah-mike-pre-wedding',
    title: "Sarah & Mike - Pre-Wedding Photoshoot",
    cover: img35, 
    images: [img35, img36, img37, img38,img35, img36, img37, img38, img39, img40, img41]
  },
  {
    id: 'Liz-James-pre-wedding-photoshoot',
    title: "Liz & James - Pre-Wedding Photoshoot",
    cover: img42, 
    images: [img42, img43, img44, img45, img42, img43, img44, img45]
  }
];

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);

  return (
    <div className="photos-wrapper">
      <div className="photos-page">
        <h1 className="page-title">Galleries</h1>

        {!activeAlbum ? (
          <div className="albums-grid">
            {weddingAlbums.map(album => (
              <div 
                key={album.id}
                className="album-card"
                onClick={() => setActiveAlbum(album)}
              >
                <div className="cover-container">
                  <img 
                    src={album.cover} 
                    alt={album.title}
                    className="album-cover"
                  />
                  <div className="title-overlay">
                    <h3>{album.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-view">
            <button 
              onClick={() => setActiveAlbum(null)}
              className="back-button"
            >
              <HiOutlineArrowLeft className="back-icon" />
              <span>Back</span>
            </button>

            <h2 className="gallery-title">{activeAlbum.title}</h2>

            <Fancybox>
              <div className="masonry-grid">
                {activeAlbum.images.map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    data-fancybox={activeAlbum.id}
                    className="gallery-item"
                  >
                    <img 
                      src={img} 
                      alt={`${activeAlbum.title} ${index + 1}`} 
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </Fancybox>
            
            {/* Reviews Section */}
            <div className="reviews-container">
              {activeAlbum ? (
                <Reviews albumId={activeAlbum.id} showAll={false} />
              ) : null}
            </div>

            {/* Additional Back Button below Reviews when viewing an album */}
            <div className="back-button-container">
              <button 
                onClick={() => setActiveAlbum(null)}
                className="back-button"
              >
                <HiOutlineArrowLeft className="back-icon" />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}

        {/* Show all reviews when no album is selected */}
        {!activeAlbum && (
          <div className="reviews-container">
            <Reviews showAll={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
