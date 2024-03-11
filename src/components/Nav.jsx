import React, { useState, useEffect, useRef } from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const SideNav = () => {
  const [menu, setMenu] = useState(false)

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  let menuRef = useRef();

  useEffect(()=>{
    document.addEventListener('mousedown', (event)=>{
      if(!menuRef.current.contains(event.target)){
        setMenu(false)
      }
    })
  })

 console.log(menu);
  return (
    <div className='sidebar' ref={menuRef}>
      <div className="left-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="img-side" onClick={()=>{
          setMenu(!menu)
        }}>
          {menu ? (<img src={close} alt="" className='open'/>) : (<img src={hamburger} alt="" className='close' />)}
        
        
        </div>
       {menu ?  (<div className="side">
        <ul>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li
              onClick={() => handleLinkClick(0)}
              className={activeLink === 0 ? "borderright" : ""}
              ><span><b>00</b></span>HOME</li>
            </div>
          </Link>
          <Link to='/destination' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li
              onClick={() => handleLinkClick(1)}
              className={activeLink === 1 ? "borderright" : ""}
              ><span><b>01</b></span>DESTINATION</li>
            </div>
          </Link>
          <Link to='/crew' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li
              onClick={() => handleLinkClick(2)}
              className={activeLink === 2 ? "borderright" : ""}
              ><span><b>02</b></span>CREW</li>
            </div>
          </Link>
          <Link to='/technology' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li
              onClick={() => handleLinkClick(3)}
              className={activeLink === 3 ? "borderright" : ""}
              ><span><b>03</b></span>TECHNOLOGY</li>
            </div>
          </Link>
        </ul>
      </div>) :
      
    (null )}
       
      </div>

      
    </div>
  )
}

export default SideNav