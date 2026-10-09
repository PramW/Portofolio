import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { experiences } from '../data/experience';
import { ArrowDoodle, CircleDoodle, StarDoodle } from '../components/Doodles';

export default function ExperienceDetail() {
  const { id } = useParams();
  const exp = experiences[id];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  if (!exp) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem' }}>Experience Not Found 😢</h1>
        <Link to="/" className="btn" style={{ marginTop: '20px' }}>⬅ Back to Home</Link>
      </div>
    );
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % exp.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + exp.photos.length) % exp.photos.length);
  };

  const hasPhotos = exp.photos && exp.photos.length > 0;
  const photo = hasPhotos ? exp.photos[currentPhoto] : null;

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Back Button */}
      <Link to="/" className="btn" style={{ background: 'var(--yellow)', marginBottom: '60px', display: 'inline-block' }}>
        ⬅ Back to Home
      </Link>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
        <span className="tag" style={{ background: exp.color, marginBottom: '16px', display: 'inline-block', color: '#111' }}>{exp.category} • {exp.year}</span>
        <div style={{ position: 'relative', zIndex: 10, display: 'block' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', position: 'relative', display: 'inline-block', margin: '0 20px' }}>
            {exp.company}
          </h1>
        </div>
        <h2 style={{ marginTop: '20px', fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#333' }}>
          {exp.title}
        </h2>
      </div>

      {/* Photo Carousel (Polaroid Style) */}
      {hasPhotos && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '80px', position: 'relative' }}>
          <StarDoodle className="doodle-wiggle" style={{ position: 'absolute', left: '10%', top: '-30px', zIndex: 5 }} />
          
          <div className="polaroid" style={{ transform: 'rotate(1deg)', maxWidth: '800px', width: '100%' }}>
            <div className="washi-tape pink" style={{ width: '200px' }}></div>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: 'white', border: '4px solid #111', overflow: 'hidden' }}>
              <img 
                src={photo.url} 
                alt={photo.title} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
              
              {/* Navigation Buttons */}
              {exp.photos.length > 1 && (
                <>
                  <button onClick={prevPhoto} className="btn" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', padding: '10px 15px', zIndex: 10 }}>
                    ◀
                  </button>
                  <button onClick={nextPhoto} className="btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', padding: '10px 15px', zIndex: 10 }}>
                    ▶
                  </button>
                </>
              )}
            </div>
            
            <div className="caption" style={{ padding: '20px 10px 10px' }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>{photo.title}</h3>
              <p className="handwriting" style={{ fontSize: '1.2rem', marginTop: '5px' }}>{photo.subtitle}</p>
              
              {exp.photos.length > 1 && (
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {exp.photos.map((_, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: idx === currentPhoto ? '#111' : '#ccc',
                        border: '2px solid #111'
                      }} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Detail Content */}
      <div className="brutalist-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', borderBottom: '4px solid #111', paddingBottom: '8px', display: 'inline-block' }}>
          My Role & Experience
        </h2>
        <p className="handwriting" style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
          {exp.desc}
        </p>
      </div>
      
      {/* Portfolio Section */}
      {exp.portfolio && exp.portfolio.length > 0 && (
        <div style={{ maxWidth: '1000px', margin: '80px auto 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', textTransform: 'uppercase' }}>
            PORTFOLIO HIGHLIGHTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {exp.portfolio.map((item, idx) => (
              <div key={idx} className="brutalist-card" style={{ background: 'white', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', border: '3px solid #111', overflow: 'hidden', marginBottom: '20px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="handwriting" style={{ fontSize: '1.2rem', flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
