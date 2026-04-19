import React from 'react';
import './../styles/test.css';
import heroImage from './../assets/images/deadlift1.jpeg'; // Replace with actual image
import logoImage from './../assets/images/champyinzLogoCut.png'; // Logo image

const test = () => {
  return (
    <div className="landing-page">

      {/* Header with Logo */}
      <header className="header">
        <h1>CHAMPYINZ <img src={logoImage} alt="Champyinz Logo" className="navbar-logo" /></h1>
        <p className="quote">“Strength in body, faith in spirit.”</p>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>OPTIMAL PERFORMANCE</h2>
        </div>

        {/* Left Annotation */}
        <div className="annotation annotation-left">
          <div className="annotation-line"></div>
          <p>All coaches on staff are certified trainers or dietitians</p>
        </div>

        {/* Right Annotation */}
        <div className="annotation annotation-right">
          <div className="annotation-line"></div>
          <p>Training and nutrition coaching for optimal performance</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Champyinz | Pittsburgh, PA</p>
      </footer>

    </div>
  );
};

export default test;
