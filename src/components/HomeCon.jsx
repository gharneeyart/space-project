import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

const HomeCon = () => {
  return (
    <div>
        <div className="home">
      <main className='container-home'>
        <div className="left-home">
          <div className="left-home-text">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>
        <div className="right-home">
        <Link  style={{ textDecoration: "none" }} to="/destination" className="circle">
         <p>EXPLORE</p>
         </Link>
        </div>
      </main>
      </div>
    </div>
  )
}

export default HomeCon