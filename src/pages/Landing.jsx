import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './../styles/Landing.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logoImage from './../assets/images/champyinzLogoCut.png';
import img1 from './../assets/images/bodybuildpose.jpg';
import img2 from './../assets/images/business.jpg';
import img3 from './../assets/images/deadlift.jpeg';
import img4 from './../assets/images/deadlift1.jpeg';
import img5 from './../assets/images/win.jpg';

const Landing = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="landing-page">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      

      <section className="hero">

        <div>
          <header className="header">
            <h1>CHAMPYINZ <img src={logoImage} alt="Champyinz Logo" className="navbar-logo" /></h1> 
            
          </header>
        </div>
        
        <div className="hero-content">
          <h2>Transform Your Body. Strengthen Your Faith.</h2>
          <a href="#contact" className="cta-btn">Join Us Today</a>
        </div>

      </section>

      {/* Image Carousel Section */}
      <section className="image-carousel">
        <Slider {...carouselSettings}>
          <div className="carousel-image"><img src={img1} alt="Fitness Training 1" /></div>
          <div className="carousel-image"><img src={img2} alt="Fitness Training 2" /></div>
          <div className="carousel-image"><img src={img3} alt="Fitness Training 3" /></div>
          <div className="carousel-image"><img src={img4} alt="Fitness Training 4" /></div>
          <div className="carousel-image"><img src={img5} alt="Fitness Training 5" /></div>
        </Slider>
      </section>

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
        <h2>About Champyinz</h2>
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
      
      {/* What's Included Section */}
      <section className="whats-included">
        <h2 className="section-title">WHAT'S INCLUDED</h2>
        <p className="section-subtitle">
          EVERYTHING YOU NEED TO GET IN SHAPE AND STAY MOTIVATED
        </p>

        <div className="grid-container">
          {/* First Row (3 Items) */}
          <div className="card">
            <h3>STRUCTURE</h3>
            <p>Receive a tailored workout program based on your goals and body type.</p>
          </div>
          <div className="card">
            <h3>FOCUS</h3>
            <p>Workouts are split into upper and lower body days to effectively build muscle.</p>
          </div>
          <div className="card">
            <h3>NUTRITION</h3>
            <p>Meal plans from a variety of diets, supplement guidance, and recipes.</p>
          </div>

          {/* Second Row (4 Items) */}
          <div className="card">
            <h3>COACHING</h3>
            <p>Trainers provide guidance on form, technique, and muscle-building strategies.</p>
          </div>
          <div className="card">
            <h3>RESULTS</h3>
            <p>These features give you the knowledge, guidance, and motivation to get results.</p>
          </div>
          <div className="card">
            <h3>UPDATES</h3>
            <p>Get the latest updates on my app and provide input on what you want to see.</p>
          </div>
          <div className="card">
            <h3>SUPPORT</h3>
            <p>Join a community of like-minded individuals who keep you accountable.</p>
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
