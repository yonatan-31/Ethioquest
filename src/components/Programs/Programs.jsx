import React from 'react'
import "./Programs.css"
import program_1 from "../../assets/one.png"
import program_2 from "../../assets/two.png"
import program_3 from "../../assets/three.png"

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Simien Mountains</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <p> Fasilidas </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>south Omo region</p>
        </div>
      </div>
    </div>
  )
}

export default Programs