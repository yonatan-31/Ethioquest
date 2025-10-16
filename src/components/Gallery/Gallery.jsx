import React from 'react'
import "./Gallery.css"
import gallery_1 from "../../assets/seven.png"
import gallery_2 from "../../assets/eight.png"
import gallery_3 from "../../assets/nine.png"
import gallery_4 from "../../assets/ten.png"
import white_arrow from "../../assets/white-arrow.png"
import gallery_5 from "../../assets/lalibela.png"
import gallery_6 from "../../assets/five.png"


const Gallery = () => {
  return (
    <div className='about-container'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
        </div>
        <button className='btn dark-btn '>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery