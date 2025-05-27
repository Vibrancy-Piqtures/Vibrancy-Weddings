import React, { useEffect, useRef } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './Home.css';


// Importing images
import img1 from '../assets/Gallery/images/Arinda/Kukyala/IMG (1).jpg';
import img2 from '../assets/Gallery/images/Arinda/Kukyala/IMG (2).jpg';
import img3 from '../assets/Gallery/images/Arinda/Kukyala/IMG (3).jpg';
import img4 from '../assets/Gallery/images/Arinda/Kukyala/IMG (4).jpg';
import img5 from '../assets/Gallery/images/Arinda/Kukyala/IMG (5).jpg';
import img6 from '../assets/Gallery/images/Arinda/Kukyala/IMG (6).jpg';
import img7 from '../assets/Gallery/images/Arinda/Kukyala/IMG (7).jpg';
import img8 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (1).jpg';
import img9 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (2).jpg';
import img10 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (3).jpg';
import img11 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (4).jpg';
import img12 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (5).jpg';
import img13 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (6).jpg';
import img14 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (7).jpg';
import img15 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (8).jpg';
import img16 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (9).jpg';
import img17 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (10).jpg';
import img18 from '../assets/gallery/images/Diana & Joseph/Kwanjura/IMG (11).jpg';
import img19 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (1).jpg';
import img20 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (2).jpg';
import img21 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (3).jpg';  
import img22 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (4).jpg';
import img23 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (5).jpg';
import img24 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (6).jpg';
import img25 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (7).jpg';
import img26 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (8).jpg';
import img27 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (9).jpg';
import img28 from '../assets/gallery/images/Liz & James/Kwanjura/IMG (10).jpg';
import img30 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (1).jpg';
import img29 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (2).jpg';
import img31 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (3).jpg';
import img32 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (4).jpg';
import img33 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (5).jpg';
import img34 from '../assets/gallery/images/Sarah & Mike/Kwanjura/IMG (6).jpg';
import img35 from '../assets/gallery/images/Sarah & Mike/Pre-Wedding/IMG (1).jpg';
import img36 from '../assets/gallery/images/Sarah & Mike/Pre-Wedding/IMG (2).jpg';
import img37 from '../assets/gallery/images/Sarah & Mike/Pre-Wedding/IMG (3).jpg';
import img38 from '../assets/gallery/images/Sarah & Mike/Pre-Wedding/IMG (4).jpg';  


// Shuffle function to randomize image order
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Gallery Data (Random)
const galleryData = shuffleArray([
    { id: 1, src: img1, alt: 'Wedding photography' },
    { id: 2, src: img2, alt: 'Wedding photography' },
    { id: 3, src: img3, alt: 'Wedding photography' },
    { id: 4, src: img4, alt: 'Wedding photography' },
    { id: 5, src: img5, alt: 'Wedding photography' },
    { id: 6, src: img6, alt: 'Wedding photography' },
    { id: 7, src: img7, alt: 'Wedding photography' },
    { id: 8, src: img8, alt: 'Wedding photography' },
    { id: 9, src: img9, alt: 'Wedding photography' },
    { id: 10, src: img10, alt: 'Wedding photography' },
    { id: 11, src: img11, alt: 'Wedding photography' },
    { id: 12, src: img12, alt: 'Wedding photography' },
    { id: 13, src: img13, alt: 'Wedding photography' },
    { id: 14, src: img14, alt: 'Wedding photography' },
    { id: 15, src: img15, alt: 'Wedding photography' },
    { id: 16, src: img16, alt: 'Wedding photography' },
    { id: 17, src: img17, alt: 'Wedding photography' },
    { id: 18, src: img18, alt: 'Wedding photography' },
    { id: 19, src: img19, alt: 'Wedding photography' },
    { id: 20, src: img20, alt: 'Wedding photography' },
    { id: 21, src: img21, alt: 'Wedding photography' },
    { id: 22, src: img22, alt:' Wedding photography'},
    { id :23 ,src :img23 ,alt :' Wedding photography'},
    { id :24 ,src :img24 ,alt :' Wedding photography'},
    { id :25 ,src :img25 ,alt :' Wedding photography'},
    { id :26 ,src :img26 ,alt :' Wedding photography'},
    { id :27 ,src :img27 ,alt :' Wedding photography'},
    { id :28 ,src :img28 ,alt :' Wedding photography'},
    { id :29 ,src :img29 ,alt :' Wedding photography'},
    { id :30 ,src :img30 ,alt :' Wedding photography'},
    { id :31 ,src :img31 ,alt :' Wedding photography'},
    { id :32 ,src :img32 ,alt :' Wedding photography'},
    { id :33 ,src :img33 ,alt :' Wedding photography'},
    { id :34 ,src :img34 ,alt :' Wedding photography'},
    { id :35 ,src :img35 ,alt :' Wedding photography'},
    { id :36 ,src :img36 ,alt :' Wedding photography'},
    { id :37 ,src :img37 ,alt :' Wedding photography'},
    { id :38 ,src :img38 ,alt :' Wedding photography'}      
  ]);
  
  function Gallery() {
    const galleryRef = useRef(null);
  
    useEffect(() => {
      // Initialiing Fancybox
      NativeFancybox.bind("[data-fancybox]", {
        Thumbs: false,
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "rotateCW"],
            right: ["slideshow", "fullscreen", "close"],
          },
        },
        Images: {
          zoom: true,
        },
      });
  
      // Calculating dynamic row spans for masonry effect
      const calculateRowSpans = () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
          const img = item.querySelector('img');
          if (img && img.complete) {
            const aspectRatio = img.naturalHeight / img.naturalWidth;
            const rowSpan = Math.ceil(aspectRatio * 15); 
            item.style.gridRowEnd = `span ${rowSpan}`;
          }
        });
      };
  
      // Run after images load
      const images = document.querySelectorAll('.grid-item img');
      images.forEach(img => {
        if (img.complete) {
          calculateRowSpans();
        } else {
          img.addEventListener('load', calculateRowSpans);
        }
      });
  
      // Also run on window resize
      window.addEventListener('resize', calculateRowSpans);
  
      return () => {
        NativeFancybox.destroy();
        window.removeEventListener('resize', calculateRowSpans);
      };
    }, []);
  
    return (
      <section className="gallery-section" id="home">
        <div className="gallery-header">
          <h2 className="home-title">Immortalizing Moments, Creating Art.</h2>
          <p className="Slogan">Let us document your love story.</p>
        </div>

        <div className="collage-grid" ref={galleryRef}>
          {galleryData.map((image) => (
            <div key={image.id} className="grid-item">
              <a
                href={image.src}
                data-fancybox="gallery"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;

