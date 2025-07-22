import React from 'react';
import "./About.css";
import about_img from "../../assets/six.png";      // Replace with cultural image
import play_icon from "../../assets/play-icon.png";  // Triggers video overlay or modal

const About = ({ setPlayState }) => {
    const handleClick = () => {
        setPlayState(true);
    };

    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="About Ethiopia" className='about-img' />
                <img src={play_icon} alt="Play Video" className='play-icon' onClick={handleClick} />
            </div>
            <div className="about-right">
                <h3>ABOUT OUR TOURS</h3>
                <h2>Experience the Soul of Ethiopia</h2>
                <p>
                    Step into a land of ancient wonders, vibrant cultures, and breathtaking landscapes.
                    Our tours are curated to immerse you in the rich traditions and spiritual heritage that make Ethiopia one of the most unique destinations on earth.
                </p>
                <p>
                    From the rock-hewn churches of Lalibela to the royal castles of Gondar and the tribal customs of the Omo Valley,
                    each journey invites you to connect with Ethiopia’s past and present in unforgettable ways.
                </p>
                <p>
                    Whether you seek spiritual depth, cultural encounters, or awe-inspiring nature,
                    our locally guided tours offer authentic experiences and stories that leave a lasting impact.
                </p>
            </div>
        </div>
    );
};

export default About;
