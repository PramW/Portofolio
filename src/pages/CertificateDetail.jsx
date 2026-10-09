import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificates } from '../data/certificate';
import { ArrowDoodle, StarDoodle } from '../components/Doodles';

export default function CertificateDetail() {
  const { id } = useParams();
  const cert = certificates[id];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  if (!cert) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem' }}>Certificate Not Found 😢</h1>
        <Link to="/" className="btn" style={{ marginTop: '20px' }}>⬅ Back to Home</Link>
      </div>
    );
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % cert.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + cert.photos.length) % cert.photos.length);
  };

  const hasPhotos = cert.photos && cert.photos.length > 0;
  const photo = hasPhotos ? cert.photos[currentPhoto] : null;

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Back Button */}
      <Link to="/" className="btn" style={{ background: 'var(--yellow)', marginBottom: '60px', display: 'inline-block' }}>
        ⬅ Back to Home
      </Link>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
        <span className="tag" style={{ background: cert.color, marginBottom: '16px', display: 'inline-block', color: cert.color === '#C084FC' ? '#fff' : '#111' }}>{cert.category} • {cert.year}</span>
        <div style={{ position: 'relative', zIndex: 10, display: 'block' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', position: 'relative', display: 'inline-block', margin: '0 20px', textTransform: 'uppercase' }}>
            {cert.company}
          </h1>
        </div>
        <h2 style={{ marginTop: '20px', fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#333' }}>
          {cert.title}
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
              {cert.photos.length > 1 && (
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
              
              {cert.photos.length > 1 && (
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {cert.photos.map((_, idx) => (
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
          Information Details
        </h2>
        <p className="handwriting" style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
          {cert.desc}
        </p>

        {cert.pdf && (
          <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', display: 'inline-block', marginTop: '24px', fontSize: '1.2rem', padding: '12px 24px', textDecoration: 'none' }}>
            VIEW ORIGINAL PDF 📄
          </a>
        )}
      </div>
      
    </div>
  );
}
