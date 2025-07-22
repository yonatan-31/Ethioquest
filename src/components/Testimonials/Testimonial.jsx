import React, { useRef } from 'react';
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="testimonial" />
                                <div>
                                    <h3>Sarah Thompson</h3>
                                    <h3>Toronto, Canada</h3>
                                </div>
                            </div>
                            <p>
                                Visiting Lalibela with this tour group was absolutely life-changing.
                                I felt deeply connected to the history, the people, and the traditions.
                                Everything was so well organized and authentic.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="testimonial" />
                                <div>
                                    <h3>Marcus Legrand</h3>
                                    <h3>Lyon, France</h3>
                                </div>
                            </div>
                            <p>
                                From the Simien Mountains to the bustling markets of Addis Ababa,
                                this was the most immersive travel experience I’ve ever had. The local guides were amazing!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="testimonial" />
                                <div>
                                    <h3>Emily Rivera</h3>
                                    <h3>San Diego, USA</h3>
                                </div>
                            </div>
                            <p>
                                The cultural insights, warm hospitality, and stunning landscapes of Ethiopia exceeded my expectations.
                                I highly recommend this tour to anyone who loves meaningful travel.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="testimonial" />
                                <div>
                                    <h3>Ahmed Al-Sayed</h3>
                                    <h3>Doha, Qatar</h3>
                                </div>
                            </div>
                            <p>
                                I’ve traveled to many countries, but Ethiopia stands out.
                                The blend of spirituality, history, and culture was unmatched. I’ll definitely be back for another tour.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonial;
