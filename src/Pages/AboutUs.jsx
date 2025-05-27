import React, { useState } from 'react'; 
import './AboutUs.css';

// Importing team images
import img1 from '../assets/Index Images/Team/Mark.jpg'
import img2 from '../assets/Index Images/Team/Jaymes.jpg';
import img3 from '../assets/Index Images/Team/Jordan.jpg';
import img4 from '../assets/Index Images/Team/Asher.jpg';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const teamMembers = [
    {
      name: "Mark Paul Mugerwa",
      role: "Photographer, Editor, Creative Director and Co-Founder",
      bio: "Specializes in capturing candid moments and tell your unique love story.",
      image: img1
    },
    {
      name: "Swade James",
      role: "Photographer, Editor, Client Management and Co-Founder",
      bio: "In charge of making sure you receive your images on time and are satisfied with our sevice delivery.",
      image: img2
    },
    {
      name: "Jordan",
      role: "Grip and Lighting Specialist",
      bio: "Makes sure the images are well lit and look vibrant.",
      image: img3
    },
    {
      name: "Asher",
      role: "Videographer and Editor",
      bio: "Makes the detail video that will allow you relive your special day.",
      image: img4
    }
  ];

  const faqs = [
    { id : 1,
      question: "How far in advance should we book your services?",
      answer: "We recommend booking at least 3-6 months in advance for weddings, especially during peak season. For other events, 2-3 months is usually sufficient."
    },
    { id : 2,
      question: "What is included in your wedding photography packages?",
      answer: "Our packages include full-day coverage, high-resolution edited images, an online gallery, and printing rights."
    },
    { id : 3,
      question: "How long until we receive our photos?",
      answer: "Our standard delivery time is 2-3 weeks for weddings and 1-2 weeks for other events. We understand the imporrtance fast delivery and the excitment of seeing your photos, so we work hard to deliver them as quickly as possible."
    },
    { id : 4,
      question: "Do you travel for destination weddings?",
      answer: "Yes! We definately travel for weddings. Destination packages include travel expenses and sometimes require minimum booking requirements."
    },
    { id : 5,
      question: "How many of your photography team do i expect on my wedding?",
      answer: "We typically have a team of 2 photographers for weddings to make sure not a moment is missed, then 2 videographers and an assistant depending on the size and complexity of the event. For smaller events, we can work with just one photographer."
    },
    { id : 6,
      question: "Do you retouch the images?",
      answer: "Yes, we retouch all images to ensure they look their best. This includes color correction, exposure adjustments, and minor blemish removal."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-wrapper">
      <div className="about-container">
        <section className="about-intro">
          <h1>Vibrancy Piqtures</h1>
          <p className="tagline">We are a fully registered photography services company</p>
          
          <div className="about-text">
            <p>Founded in 2023, we're a passionate team dedicated to capturing your wedding day with artistry and authenticity. We believe in genuine moments, beautiful light, and images that stand the test of time.</p>
            <p>Our approach is simple: we listen, we observe, and we create. No forced poses. No artificial smiles. Just real emotion, beautifully documented.</p>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">Your Visual storytellers.</p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                    loading="lazy"
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="philosophy">
          <h2>Our Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Authentic</h3>
              <p>We capture real moments as they happen, creating images full of genuine emotion.</p>
            </div>
            <div className="philosophy-item">
              <h3>Artistic</h3>
              <p>Every image is carefully composed with attention to light, color, and moment.</p>
            </div>
            <div className="philosophy-item">
              <h3>Unobtrusive</h3>
              <p>We blend into your day, allowing you to be fully present while we work discreetly.</p>
            </div>
            <div className="philosophy-item">
              <h3>Light speed Delivery</h3>
              <p>We understand the importance of fast delivery and how annoying it gets when there's delay, so we set a standby editing team that ensures work is ready in the promised time.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <p className="faq-subtitle">Common questions about our services</p>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;