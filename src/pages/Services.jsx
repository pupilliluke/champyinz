import React from 'react';
import './../styles/Services.css';
import logoImage from './../assets/images/champyinzLogoCut.png'; // Importing the image

const Services = () => {
  return (
    <div className="services-page">

      {/* Header with Logo */}
      <header className="header">
        <h1>CHAMPYINZ <img src={logoImage} alt="Champyinz Logo" className="navbar-logo" /></h1>
        <p className="quote">“Strength in body, faith in spirit.”</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Explore Our Services</h2>
          <p>From personalized training to community-based programs, we offer services to help you achieve your fitness and spiritual goals.</p>
        </div>
      </section>

      {/* Services Section with Service Cards */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Personal Training</h3>
            <p>Work one-on-one with a certified trainer to develop a personalized workout plan tailored to your fitness goals.</p>
          </div>
          <div className="card">
            <h3>Group Classes</h3>
            <p>Join dynamic group fitness classes designed for all levels and ages, fostering a fun and motivating environment.</p>
          </div>
          <div className="card">
            <h3>Faith-Focused Coaching</h3>
            <p>Our coaching goes beyond fitness, providing spiritual guidance alongside physical training for holistic well-being.</p>
          </div>
          <div className="card">
            <h3>Nutrition Guidance</h3>
            <p>Receive personalized nutrition advice to support your fitness journey, ensuring you fuel your body properly.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Ready to take the next step in your fitness journey? Reach out to us for more information about our services.</p>
        <a href="mailto:contact@champyinz.com" className="cta-btn">Get In Touch</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Champyinz | Pittsburgh, PA</p>
      </footer>

    </div>
  );
};

export default Services;
