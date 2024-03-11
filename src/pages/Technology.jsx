import React, {useState} from 'react'
import "../css/Technology.css"
import { TechnologyDB } from '../db/TechnologyDB'


const Technology = () => {
  const [tech] = useState(TechnologyDB)
  const [value, setValue] = useState(0)

  const {name, images, description} = tech[value]

  const handleButtonClick = (index) => {
    setValue(index);
  }
  return (
    <div className='technology-body'>
      <div className="technology">
      <div className="tech-container">
      <div className="title-tech">
            <h1><span>03</span>SPACE LAUNCH 101</h1>
          </div>
          <div className="tech-content">
            <div className="tech-content-left">
              <div className="left-button">
                {tech.map((techbtn, index)=>(
                  <button
                  key={index}
                  className={value === index ? "select" : ""}
                  onClick={()=>handleButtonClick(index) }
                  >{index + 1}</button>
                ))}
              </div>
              <div className="left-content">
                <h3>THE TERMINOLOGY...</h3>
                <h1>{name.toUpperCase()}</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="tech-content-right">
              <img src={images.portrait} title={name} className='desktop-tech'/>
              <img src={images.landscape} title={name} className='mobile-tech'/>
            </div>
          </div>
      </div>
      </div>
        
    </div>
  )
}

export default Technology