import React, { useEffect, useState } from 'react';
import './../styles/Landing.css';
import logoImage from './../assets/images/champyinzLogoCut.png'; // Importing the image



const Landing = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY; // How much the user has scrolled
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable area
      const progress = (scrollTop / windowHeight) * 100; // Calculate percentage
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    
    <div className="landing-page">

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>


      {/* Header with Motivational Quote */}
      <header className="header">
        <h1>CHAMPYINZ         <img src={logoImage} alt="Champyinz Logo" className="navbar-logo" />
        </h1> 
        <p className="quote">“The body achieves what the mind believes.”</p>
      </header>
      

      {/* Hero Section with Call to Action */}
      <section className="hero">
        <div className="hero-content">
          <h2>Transform Your Body. Strengthen Your Faith.</h2>
          <a href="#contact" className="cta-btn">Join Us Today</a>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Champyinz, our mission is to inspire and empower individuals to achieve their highest potential through physical strength and spiritual growth. We are committed to creating a community where faith and fitness go hand in hand, supporting one another in the pursuit of holistic well-being.
        </p>
      </section>

      {/* Carousel for Testimonials or Services */}
      <section className="carousel">
        <div className="carousel-container">
          <div className="carousel-item">
            <p>"Champyinz helped me gain confidence both in my fitness and my faith."</p>
            <p>- John, Member</p>
          </div>
          <div className="carousel-item">
            <p>"A community of champions who motivate and support each other."</p>
            <p>- Sarah, Member</p>
          </div>
        </div>
      </section>

      {/* About Us Section with More Detail */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Champyinz is a fitness community grounded in faith. We blend the pursuit of physical health with spiritual strength. Whether you're a seasoned athlete or just starting your fitness journey, we’re here to help you transform, grow, and succeed. We focus on building both your body and spirit with our tailored training programs and a supportive, faith-driven community.
        </p>
      </section>

      {/* Features Section with Cards */}
      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Personal Training</h3>
            <p>Get one-on-one attention from certified trainers focused on your fitness goals.</p>
          </div>
          <div className="card">
            <h3>Group Classes</h3>
            <p>Join group fitness classes designed for all levels and ages, focused on fun and community.</p>
          </div>
          <div className="card">
            <h3>Faith-Focused Coaching</h3>
            <p>Strengthen your faith alongside your fitness with spiritually-driven coaching and mentoring.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or ready to start your fitness journey? Get in touch with us!</p>
        <a href="mailto:contact@champyinz.com" className="cta-btn">Reach Out</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Champyinz | Pittsburgh, PA</p>
      </footer>

    </div>
    
  );
};

export default Landing;
