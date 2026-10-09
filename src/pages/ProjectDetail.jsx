import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowDoodle, CircleDoodle, StarDoodle } from '../components/Doodles';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem' }}>Project Not Found 😢</h1>
        <Link to="/" className="btn" style={{ marginTop: '20px' }}>⬅ Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '100px', minHeight: '100vh', position: 'relative' }}>
      
      {/* Back Button */}
      <Link to="/" className="btn" style={{ background: 'var(--yellow)', marginBottom: '60px', display: 'inline-block' }}>
        ⬅ Back to Home
      </Link>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span className="tag pink" style={{ margin: 0 }}>{project.category}</span>
          {project.techStack.map((tech, index) => {
            const colors = ['blue', 'green', 'orange'];
            const color = colors[index % colors.length];
            return <span key={tech} className={`tag ${color}`} style={{ margin: 0 }}>{tech}</span>;
          })}
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1', position: 'relative', display: 'inline-block', margin: '0 20px' }}>
            {project.title}
          </h1>
        </div>
        <ArrowDoodle style={{ position: 'absolute', right: '5%', top: '-20px', transform: 'rotate(100deg)' }} />
      </div>

      {/* Hero Image / Polaroid */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px', position: 'relative' }}>
        <StarDoodle className="doodle-wiggle" style={{ position: 'absolute', left: '15%', top: '-20px' }} />
        <div className="polaroid" style={{ transform: 'rotate(-2deg)' }}>
          <div className="washi-tape blue" style={{ width: '150px' }}></div>
          <div style={{ width: '100%', maxWidth: '800px', height: '400px', background: project.color, border: '4px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '4rem', opacity: 0.8 }}>{project.title} MOCKUP</h2>
          </div>
          <div className="caption">Sneak peek of the project! 🚀</div>
        </div>
      </div>

      {/* Detail Content */}
      <div className="brutalist-card" style={{ maxWidth: '800px', margin: '0 auto', background: '#FEF9C3' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', borderBottom: '4px solid #111', paddingBottom: '8px', display: 'inline-block' }}>
            About the Project
          </h2>
          <p className="handwriting" style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
            {project.desc}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', borderBottom: '4px solid #111', paddingBottom: '8px', display: 'inline-block' }}>
            Key Features
          </h2>
          <ul className="handwriting" style={{ fontSize: '1.5rem', lineHeight: '1.8', paddingLeft: '30px' }}>
            <li style={{ marginBottom: '12px' }}>Modern & intuitive user interface designed with Figma.</li>
            <li style={{ marginBottom: '12px' }}>Robust back-end implementation ensuring data security.</li>
            <li style={{ marginBottom: '12px' }}>Responsive design for seamless mobile and web experience.</li>
          </ul>
        </div>
        
      </div>
      
    </div>
  );
}
