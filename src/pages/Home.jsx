import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDoodle, StarDoodle, CircleDoodle, SmileyDoodle } from '../components/Doodles';
import { experiences, experienceOrder } from '../data/experience';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <a href="#home" className="logo" style={{ boxShadow: '4px 4px 0px var(--black)', transform: 'none' }}>Pram.</a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#focus">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Award</a>
          <a href="#contact">Contact</a>
          <a href="/cv.pdf" download className="btn" style={{ marginLeft: '8px', padding: '8px 16px', fontSize: '0.9rem' }}>DOWNLOAD CV</a>
        </div>
      </nav>

      <main className="container" style={{ paddingTop: '120px' }}>

        {/* HERO SECTION */}
        <section id="home" style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: '1 1 500px', position: 'relative', zIndex: 10 }}>
              <div className="sticky-note doodle-wiggle" style={{ display: 'inline-block', marginBottom: '20px', background: 'var(--orange)', color: '#fff' }}>
                Hello! my name is
              </div>
              <h1 style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', lineHeight: '0.9', marginBottom: '20px', position: 'relative' }}>
                PRAM
              </h1>
              <p className="handwriting" style={{ fontSize: '1.6rem', marginBottom: '40px', maxWidth: '700px', lineHeight: '1.5' }}>
                A Fullstack Developer and UI/UX Designer passionate about crafting <span style={{ background: 'var(--yellow)', padding: '0 8px', border: '2px solid #111' }}>visually engaging</span> and highly functional digital experiences. Currently a Computer Science undergraduate specializing in Cyber Security at BINUS University, I bridge the gap between intuitive user-centric design and secure, resilient software architecture to deliver impactful solutions.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn" style={{ background: 'var(--blue)', color: 'white' }}>LET'S TALK! ➔</a>
                <a href="#work" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)' }}>VIEW PROJECTS</a>
              </div>
            </div>

            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px', position: 'relative' }}>
              <div className="polaroid" style={{ position: 'relative' }}>
                <StarDoodle className="doodle-wiggle" style={{ position: 'absolute', top: '-30px', right: '-30px', zIndex: -1 }} />
                <div className="washi-tape blue"></div>
                <img src="/pram-photo.jpg" alt="Pram" style={{ width: '280px', height: '380px', objectFit: 'cover', border: '2px solid #111', display: 'block' }} />
                <div className="caption">It's me! 👋</div>
              </div>
            </div>
          </div>

          {/* Metadata Strip */}
          <div className="brutalist-card" style={{ marginTop: '60px', background: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '1.1rem' }}>📍 LOCATION: JAKARTA, ID</div>
            <div style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '1.1rem' }}>🎓 MAJOR: CS & CYBER SECURITY</div>
            <div style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--green)' }}>🚀 STATUS: READY TO DEPLOY</div>
          </div>
        </section>

        {/* 01 / BACKGROUND & FOCUS */}
        <section id="focus">
          <SmileyDoodle className="doodle-wiggle" style={{ top: '20px', right: '10%' }} />
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px' }}>01 / BACKGROUND & RESEARCH FOCUS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            {/* The Deep Dive */}
            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '2rem', textTransform: 'uppercase' }}>The Deep Dive</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontFamily: 'var(--font-heading)', fontWeight: '900', marginBottom: '12px' }}>
                Visual Aesthetics. Robust Engineering. Impenetrable Security.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '12px' }}>
                I am a Software Engineer, UI/UX Designer, and Project Leader with a Cyber Security focus at BINUS University.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '24px', flex: 1 }}>
                Backed by a linear IT background from vocational school to university, I blend creative design, full-stack architecture, and offensive security to lead teams in engineering digital products that are intuitive, scalable, and built secure-by-design.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                <span className="tag" style={{ background: '#FF729F', color: '#111', margin: 0, padding: '6px 12px', fontSize: '0.85rem', border: '2px solid var(--black)', boxShadow: '2px 2px 0px var(--black)' }}>🎨 UI/UX & Visual Media</span>
                <span className="tag" style={{ background: '#FFE600', color: '#111', margin: 0, padding: '6px 12px', fontSize: '0.85rem', border: '2px solid var(--black)', boxShadow: '2px 2px 0px var(--black)' }}>💻 Full-Stack</span>
                <span className="tag" style={{ background: '#00E599', color: '#111', margin: 0, padding: '6px 12px', fontSize: '0.85rem', border: '2px solid var(--black)', boxShadow: '2px 2px 0px var(--black)' }}>🛡️ Mobile & Web Pen-Testing</span>
                <span className="tag" style={{ background: '#00D2FF', color: '#111', margin: 0, padding: '6px 12px', fontSize: '0.85rem', border: '2px solid var(--black)', boxShadow: '2px 2px 0px var(--black)' }}>👑 Team Leadership</span>
              </div>
            </div>

            {/* Right Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div className="brutalist-card" style={{ background: 'var(--yellow)', textAlign: 'center', padding: '24px 16px' }}>
                  <h1 style={{ fontSize: '4rem', marginBottom: '8px', lineHeight: '1' }}>05</h1>
                  <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>ACTIVE SEMESTERS IN CS & CYBER SECURITY AT BINUS UNIVERSITY</h4>
                </div>
                <div className="brutalist-card" style={{ background: 'var(--pink)', textAlign: 'center', padding: '24px 16px' }}>
                  <h1 style={{ fontSize: '4rem', marginBottom: '8px', lineHeight: '1' }}>💡</h1>
                  <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>CO-LEAD GDGOC & STAFF CREATIVE DESIGN</h4>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                <div className="brutalist-card" style={{ background: '#fff' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>CYBER & OFFENSIVE SECURITY</h4>
                  <p className="handwriting" style={{ fontSize: '1.1rem' }}>Web & Mobile Pen-Testing, Reverse Engineering, and Blockchain.</p>
                </div>
                <div className="brutalist-card" style={{ background: '#fff' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>FULL-STACK & CREATIVE DESIGN</h4>
                  <p className="handwriting" style={{ fontSize: '1.1rem' }}>End-to-end App & Web Development combined with UI/UX & Visual Media, built on robust software engineering principles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / SELECTED WORK */}
        <section id="work">
          {/* <StarDoodle className="doodle-wiggle" style={{ top: '80px', left: '2%' }} /> */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0 }}>02 / RECENTLY WORK</h2>
            <Link to="/projects" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', border: '2px solid #111', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.875rem', boxShadow: '4px 4px 0px 0px #000', padding: '10px 20px', display: 'inline-block' }}>SEE MORE PROJECTS ↗</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Featured Project */}
            <div className="brutalist-card" style={{ background: 'white', padding: '0', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
              <div style={{ flex: '1 1 400px', padding: '40px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <span className="tag blue" style={{ margin: 0, padding: '4px 16px', fontSize: '0.875rem' }}>FEATURED WEB APP</span>
                  {/* <span className="tag green" style={{ margin: 0, padding: '4px 16px', fontSize: '0.875rem' }}>LIVE PRODUCTION</span> */}
                </div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '16px', fontWeight: '800', textTransform: 'uppercase' }}>BARDIMAN THE BARBER</h3>
                <p style={{ color: 'var(--black)', marginBottom: '24px', fontWeight: '500', fontStyle: 'italic', fontSize: '1.2rem' }}>Web Admin & Application Booking System built with Laravel, Flutter, & Figma for operational and transaction management.</p>

                <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                  <li style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1' }}>★</span> Real-time booking management & automated ticket generation
                  </li>
                  <li style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: '700', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1' }}>★</span> Seamless admin dashboard integration for business analytics
                  </li>
                </ul>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {['LARAVEL', 'FLUTTER', 'FIGMA', 'MYSQL'].map(tech => <span key={tech} className="tag" style={{ background: 'white', color: '#111', margin: 0, padding: '4px 16px', fontSize: '0.8rem' }}>{tech}</span>)}
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="https://github.com/WilliamHanantha/Bardiman" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)' }}>FRONTEND (GITHUB) ↗</a>
                  <a href="https://gitlab.com/ArfaNaufal/bardiman-backend" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--black)', color: 'white' }}>BACKEND (GITLAB) ↗</a>
                  <a href="https://www.figma.com/design/V1Obyf5WjovZ6HHI88NXkc/Bardiman-The-Barber?node-id=9-565&t=vh9LCDwVLHXY842U-1" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--black)' }}>FIGMA DESIGN ↗</a>
                </div>
              </div>
              <div style={{ flex: '1 1 300px', borderLeft: '4px solid #111', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', position: 'relative' }}>
                <StarDoodle className="doodle-wiggle" style={{ position: 'absolute', top: '30px', right: '30px', width: '60px', zIndex: 1 }} />
                <SmileyDoodle className="doodle-wiggle" style={{ position: 'absolute', bottom: '40px', left: '30px', width: '70px', transform: 'rotate(-15deg)', zIndex: 1 }} />
                <CircleDoodle style={{ position: 'absolute', top: '50%', left: '10%', width: '40px', opacity: 0.5, zIndex: 1 }} />

                <div className="polaroid" style={{ transform: 'rotate(2deg)', width: '90%', maxWidth: '600px', position: 'relative', zIndex: 5 }}>
                  <div className="washi-tape pink"></div>
                  <div style={{ width: '100%', aspectRatio: '4/3', backgroundImage: 'url(/projects/bardiman.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: '2px solid #111' }}></div>
                </div>
              </div>
            </div>

            {/* Grid Projects */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              <div style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div onClick={() => navigate('/project/sheguard')} className="brutalist-card clickable-card" style={{ padding: '0', background: 'var(--pink)', color: 'var(--black)', cursor: 'pointer', height: '100%' }}>
                  <div style={{ padding: '32px' }}>
                    <span className="tag" style={{ background: 'var(--yellow)', color: 'var(--black)', border: '2px solid #111', fontWeight: 'bold', borderRadius: '999px', padding: '4px 16px', fontSize: '0.75rem', width: 'max-content', margin: '0 0 16px 0' }}>UI/UX DESIGN</span>
                    <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '12px', fontWeight: '800', textTransform: 'uppercase' }}>SHEGUARD</h3>
                    <p style={{ fontWeight: '500', fontStyle: 'italic', marginBottom: '16px' }}>UI/UX Design & Mobile HSE Monitoring System.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
                      <a onClick={(e) => e.stopPropagation()} href="https://play.google.com/store/apps/details?id=id.co.ssprimadaya.mykura" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', border: '2px solid #111', fontWeight: 'bold', boxShadow: '4px 4px 0px 0px #000', padding: '8px 16px', display: 'inline-block', width: 'max-content', fontSize: '0.875rem' }}>MYKURA (PLAY STORE) ↗</a>
                      <a onClick={(e) => e.stopPropagation()} href="https://play.google.com/store/apps/details?id=com.ssp.pelakuk3" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--green)', color: 'var(--black)', border: '2px solid #111', fontWeight: 'bold', boxShadow: '4px 4px 0px 0px #000', padding: '8px 16px', display: 'inline-block', width: 'max-content', fontSize: '0.875rem' }}>PELAKU K3 (PLAY STORE) ↗</a>
                      <a onClick={(e) => e.stopPropagation()} href="https://www.figma.com/design/umASe4LLlzbcZWXtfDhyYg/S2P-MOBILE?node-id=0-1&t=zwHCFPGQczinq0UA-1" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'black', border: '2px solid #111', fontWeight: 'bold', boxShadow: '4px 4px 0px 0px #000', padding: '8px 16px', display: 'inline-block', width: 'max-content', fontSize: '0.875rem' }}>FIGMA DESIGN ↗</a>
                    </div>
                  </div>
                  <div style={{ borderTop: '4px solid #111', background: '#fff', padding: '32px', display: 'flex', justifyContent: 'center' }}>
                    <div className="polaroid" style={{ transform: 'rotate(-4deg)', width: '90%', maxWidth: '600px' }}>
                      <div className="washi-tape blue"></div>
                      <div style={{ width: '100%', aspectRatio: '16/9', background: '#ddd', border: '2px solid #111' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div onClick={() => navigate('/project/thesis-buddy')} className="brutalist-card clickable-card" style={{ padding: '0', background: '#FFA500', color: 'var(--black)', cursor: 'pointer', height: '100%' }}>
                  <div style={{ padding: '32px' }}>
                    <span className="tag" style={{ background: 'var(--blue)', color: 'white', border: '2px solid #111', fontWeight: 'bold', borderRadius: '999px', padding: '4px 16px', fontSize: '0.75rem', width: 'max-content', margin: '0 0 16px 0' }}>UI/UX DESIGN</span>
                    <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '12px', fontWeight: '800', textTransform: 'uppercase' }}>THESIS BUDDY</h3>
                    <p style={{ fontWeight: '500', fontStyle: 'italic', marginBottom: '16px' }}>UI/UX Design for The ACE Universitas Diponegoro 2024. A digital platform designed to help students manage and streamline their thesis journey.</p>
                    <a onClick={(e) => e.stopPropagation()} href="https://www.figma.com/design/9zFXcMDTmZHGD5Vb2j952N/The-Ace-Universitas-Diponegoro---Mie-Ayam-Bawang---Thesis-Buddy?node-id=29-797&p=f&t=CdJxFtOCsdp4u8Gh-0" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'black', border: '2px solid #111', fontWeight: 'bold', boxShadow: '4px 4px 0px 0px #000', padding: '8px 16px', display: 'inline-block', width: 'max-content' }}>FIGMA DESIGN ↗</a>
                  </div>
                  <div style={{ borderTop: '4px solid #111', background: '#fff', padding: '32px', display: 'flex', justifyContent: 'center' }}>
                    <div className="polaroid" style={{ transform: 'rotate(2deg)' }}>
                      <div className="washi-tape pink"></div>
                      <div style={{ width: '100%', minWidth: '200px', aspectRatio: '16/9', background: '#ddd', border: '2px solid #111' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / WHERE I'VE BEEN */}
        <section id="experience">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px' }}>03 / WHERE I'VE BEEN</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {experienceOrder.map((id) => {
              const exp = experiences[id];
              return (
                <Link key={id} to={`/experience/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="brutalist-card clickable-card" style={{ cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '16px' }}>
                      <h3 style={{ fontSize: '1.8rem' }}>{exp.title}</h3>
                      <span className="tag" style={{ background: exp.color, color: '#111', margin: 0 }}>{exp.year}</span>
                    </div>
                    <h4 style={{ color: exp.color === 'var(--yellow)' ? 'var(--blue)' : exp.color, marginBottom: '12px', fontSize: '1.2rem' }}>{exp.company}</h4>
                    <p className="handwriting">{exp.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 04 / CERTIFICATES & AWARDS */}
        <section id="certificates">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px', fontWeight: '900', textTransform: 'uppercase' }}>04 / CERTIFICATES & AWARDS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#F472B6', color: '#111', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111', whiteSpace: 'nowrap' }}>UKSW UNIVERSITY</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>2ND PLACE WINNER ISFEST UKSW 2025</h3>
              <Link to="/certificate/isfest" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div>

            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#F97316', color: '#111', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111' }}>DIPONEGORO UNIVERSITY</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>NATIONAL FINALIST THE ACE 2024</h3>
              <Link to="/certificate/undip-uiux" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div>

            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#34D399', color: '#111', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111', whiteSpace: 'nowrap' }}>GDG ON CAMPUS BINUS@MALANG</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>CREATIVE CORE TEAM 2024/2025</h3>
              <Link to="/certificate/gdg" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div>

            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#3B82F6', color: '#fff', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111' }}>PT NOCOLA IOT SOLUTION</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>UI/UX DESIGNER & MOBILE DEVELOPER</h3>
              <Link to="/certificate/nocola" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div>

            <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#4ADE80', color: '#111', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111', whiteSpace: 'nowrap' }}>NVIDIA</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>FUNDAMENTALS OF DEEP LEARNING</h3>
              <Link to="/certificate/nvidia" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div>

            {/* <div className="brutalist-card" style={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
              <span className="tag" style={{ background: '#C084FC', color: '#fff', margin: '0 0 16px 0', alignSelf: 'flex-start', fontSize: '0.8rem', padding: '6px 16px', border: '2px solid #111', boxShadow: '3px 3px 0px #111', whiteSpace: 'nowrap' }}>IDN IT FEST 2022</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '16px', marginBottom: '32px', flex: 1, fontWeight: '800', textTransform: 'uppercase' }}>UI/UX DESIGN COMPETITION</h3>
              <Link to="/certificate/idn-it-fest" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)', alignSelf: 'flex-start', padding: '8px 16px', border: '2px solid #111', boxShadow: '4px 4px 0px #111', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>VIEW ↗</Link>
            </div> */}



          </div>
        </section>

        {/* 05 / TECHNICAL CAPABILITIES */}
        <section id="skills">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px' }}>05 / TECHNICAL CAPABILITIES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>

            <div className="brutalist-card" style={{ padding: 0 }}>
              <div style={{ background: 'var(--yellow)', padding: '16px', borderBottom: '4px solid #111' }}>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>FRONTEND & MOBILE</h3>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                {['JavaScript', 'React', 'Flutter', 'Ionic', 'Angular'].map(tech => <span key={tech} className="tag" style={{ background: '#fff', margin: 0 }}>{tech}</span>)}
              </div>
            </div>

            <div className="brutalist-card" style={{ padding: 0 }}>
              <div style={{ background: 'var(--pink)', padding: '16px', borderBottom: '4px solid #111' }}>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>BACKEND & FRAMEWORKS</h3>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                {['PHP', 'Laravel', 'Python', 'RESTful API'].map(tech => <span key={tech} className="tag" style={{ background: '#fff', margin: 0 }}>{tech}</span>)}
              </div>
            </div>

            <div className="brutalist-card" style={{ padding: 0 }}>
              <div style={{ background: 'var(--blue)', color: 'white', padding: '16px', borderBottom: '4px solid #111' }}>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>DATABASE & CLOUD</h3>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                {['MySQL', 'Firebase'].map(tech => <span key={tech} className="tag" style={{ background: '#fff', margin: 0 }}>{tech}</span>)}
              </div>
            </div>

            <div className="brutalist-card" style={{ padding: 0 }}>
              <div style={{ background: 'var(--green)', padding: '16px', borderBottom: '4px solid #111' }}>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}>TOOLS & DESIGN</h3>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                {['Figma', 'Git & GitHub', 'VS Code'].map(tech => <span key={tech} className="tag" style={{ background: '#fff', margin: 0 }}>{tech}</span>)}
              </div>
            </div>

          </div>
        </section>

        {/* 06 / GET IN TOUCH */}
        <section id="contact" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="brutalist-card" style={{ background: 'var(--pink)', maxWidth: '800px', width: '100%', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>LET'S MAKE SOMETHING AWESOME TOGETHER!</h2>
            <p className="handwriting" style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
              Got a project, a hard problem, or just want to say hi? Send it over. I read every message.
            </p>
            <a href="mailto:dimaspramatya27@gmail.com" className="btn" style={{ background: 'var(--blue)', color: 'white', fontSize: '1.5rem', padding: '16px 32px' }}>START A PROJECT ✉</a>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/cv.pdf" download="CV_Pram.pdf" className="btn" style={{ background: 'var(--yellow)', color: 'var(--black)' }}>DOWNLOAD CV 📄</a>
            <a href="https://github.com/PramW" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--black)', color: 'white' }}>GITHUB 🐙</a>
            <a href="https://www.linkedin.com/in/dimas-pramatya-wijaya-907a99233/" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--blue)' }}>LINKEDIN 💼</a>
            <a href="https://www.instagram.com/pramatyaaa_?stkn=eXZwdHVmeWUwM281" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--pink)', color: 'var(--black)' }}>INSTAGRAM 📷</a>
            <a href="https://wa.me/62895802493399" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--green)', color: 'var(--black)' }}>WHATSAPP 💬</a>
          </div>
          <SmileyDoodle className="doodle-wiggle" style={{ marginTop: '40px' }} />
        </section>
      </main>

      <footer style={{ borderTop: '4px solid #111', padding: '40px 24px', textAlign: 'center', background: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Pram.</h2>
        <p className="handwriting">Design with purpose. Create with joy. ✨</p>
        <p style={{ marginTop: '24px', fontSize: '0.9rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>© 2026 Pram. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 999,
          background: 'var(--pink)',
          color: 'var(--black)',
          border: '3px solid var(--black)',
          boxShadow: '4px 4px 0px var(--black)',
          padding: '10px 16px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          borderRadius: '0px'
        }}
        title="Back to Top"
      >
        ⬆
      </button>
    </>
  );
}
