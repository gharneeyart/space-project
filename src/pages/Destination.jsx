import React, {useState} from 'react'
import "../css/Destination.css"
import { destinations } from '../db/DestinationDB'

const Destination = () => {
  const [items] = useState(destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = items[value]

  const handleButtonClick = (index) => {
    setValue(index);
  }

  return (
    <div>
      <div className="destination-body">
        <div className="destination">
          <main className='main'>
            <div className='title-text-dest'>
              <h1><span>01</span> PICK YOUR DESTINATION</h1>
            </div>
            <div className='content-dest'>
              <div className="content-dest-img">
                <img src={images} title={name} />
              </div>
              <div className="content-dest-text">
                <div className="btn-dest">
                  {items.map((item, index)=> (
                    <button 
                    key={index}
                    className={value === index ? "click" : ""}
                    onClick={()=>handleButtonClick(index) }
                    >{item.name.toUpperCase()}</button>
                  ))}
                </div>
                <div className="middle-text">
                  <h1>{name.toUpperCase()}</h1>
                  <p>{description}</p>
                </div>
                <div className="border-line"></div>
                <div className="bottom-text">
                  <div className="left-bottom">
                    <p>AVG. DISTANCE</p>
                    <h3>{distance.toUpperCase()}</h3>
                  </div>
                  <div className="right-bottom">
                    <p>EST. TRAVEL TIME</p>
                    <h3>{travel.toUpperCase()}</h3>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        </div>
    </div>
  )
}

export default Destination