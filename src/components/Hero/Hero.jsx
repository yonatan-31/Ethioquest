// import "./Hero.css"
// import dark_arrow from "../../assets/dark-arrow.png"

// import { Link } from 'react-scroll';
// const Hero = () => {
//     return (
//         <div className='hero container'>
//             <div className="hero-text">
//                 <h1>We Ensure better education for a better world</h1>
//                 <p>Our cutting-edge curriculum is designed to empower students
//                     with the knowledge, skills, and experiences needed to excel in
//                     the dynamic field of education</p>

//                 <button className='btn'> <Link to="program" smooth={true} offset={-260} duration={500}>Explore more<img src={dark_arrow} alt="" /></Link></button>
//             </div>
//         </div>
//     )
// }

// export default Hero

import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Discover the Heart of Ethiopia</h1>
                <p>
                    Journey through Ethiopia’s ancient cities, sacred sites, and vibrant cultures.
                    Join our expertly guided tours to uncover the rich heritage of the North.
                </p>

                <button className='btn'>
                    <Link to="tours" smooth={true} offset={-260} duration={500}>
                        Explore Tours <img src={dark_arrow} alt="arrow icon" />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Hero;
