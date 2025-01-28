import React, { useEffect, useState } from 'react';
import './../styles/About.css';
import Navbar from './../components/navbar';
import logoImage from './../assets/images/champyinzLogoCut.png'; // Importing the image


const About = () => {
    return (

        <section class="about">
            <h2>About Us</h2>
            
            <div class="about-history">
                <h3>History of Our Founding</h3>
                <p>Our company was founded in [Year] with the vision of providing innovative solutions to modern challenges. From humble beginnings, we have grown to become leaders in our industry, committed to delivering excellence.</p>
            </div>

            <div class="about-founder">
                <h3>About the Founder</h3>
                <p>Our founder, [Founder Name], started this journey with a passion for [Field/Industry]. With a background in [mention relevant experience], they have dedicated themselves to [mission/purpose] and continue to lead the company toward a brighter future.</p>
            </div>

            <div class="about-locations">
                <h3>Our Locations</h3>
                <p>We are proud to have multiple locations across [Country/Region]. Our main office is located in [City], with additional offices in [Other Cities/Regions]. Each location is equipped to serve our growing client base.</p>
            </div>

            <div class="about-future">
                <h3>Our Plan for the Future</h3>
                <p>Looking ahead, we are focused on expanding our reach, introducing new products/services, and continuing to innovate. We aim to stay at the forefront of [industry] while maintaining a strong commitment to our values of [values/mission].</p>
            </div>

            <div class="about-team">
                <h3>Our Team</h3>
                <p>Our team is comprised of talented individuals who bring diverse skills and experiences to the table. Each member of our team is dedicated to [core mission or company purpose]. Together, we strive to deliver outstanding results for our clients and partners.</p>
            </div>
        </section>

    );
};

export default About;

