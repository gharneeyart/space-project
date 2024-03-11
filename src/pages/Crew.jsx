import React, {useState} from 'react'
import "../css/Crew.css"
import { Crews } from '../db/CrewDB'

const Crew = () => {
  const [crewDB] = useState(Crews)
  const [value, setValue] = useState(0)

  const {name, images, role, bio} = crewDB[value]

  const handleButtonClick = (index) => {
    setValue(index);
  }
  return (
    <div className='crew-body'>
       <div className="crew">
        <section className='section-crew'>
          <div className="title-crew">
            <h1><span>02</span>MEET YOUR CREW</h1>
          </div>
          <div className="content-crew">
            <div className="content-crew-left">
              <div className="left-content-info">
                <h2>{role.toUpperCase()}</h2>
                <h1>{name.toUpperCase()}</h1>
                <p>{bio}</p>
              </div>
              <div className="left-content-btn">
                {crewDB.map((crew, index)=>(
                  <button key={index}
                  className={value === index ? "dot" : ""}
                    onClick={()=>handleButtonClick(index) }></button>
                ))}
              </div>
            </div>
            <div className="content-crew-right">
              <img src={images} alt="" />
            </div>
          </div>
        </section>
       </div>
    </div>
  )
}

export default Crew