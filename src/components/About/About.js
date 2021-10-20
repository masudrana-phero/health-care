import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="about-area">
            <div className="title">
                <h2>About Us</h2>
                <h4 className="m-3">What we are and our history </h4>

            </div>

            <div className="about-container">
                <div className="description ">
                    <h2>VISION & MISSION</h2>
                    <h6>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</h6>
                    <p>BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records.</p>
                </div>
                <div className="img-container">
                    <img className="about-img" src='https://images.megapixl.com/5540/55402050.jpg' alt="" />
                </div>


            </div>
        </div>
    );
};

export default About;