import React, {useState} from 'react'
import "../css/Header.css"
import { Link } from 'react-router-dom'
import logo from "../assets/shared/logo.svg"


const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
    <div className='header'>
        <div className="left-side">
        <img src={logo} className="logo1" />
        </div>
        <div className="border"></div>
        <div className="right-side">
            <ul style={{listStyle: "none"}}> 
                    <div className="nav" to="/">
                    <Link to="/" style={{textDecoration: "none"}}>
                    <li
                    onClick={() => handleLinkClick(0)}
                    className={activeLink === 0 ? "active" : ""}
                    ><span>00</span>HOME</li>
                    </Link>
                    
                    </div>
                    
                 
                    <div className="nav" to="/destination">
                    <Link to="/destination" style={{textDecoration: "none"}}>
                    <li
                    onClick={() => handleLinkClick(1)}
                    className={activeLink === 1 ? "active" : ""}
                    ><span>01</span>DESTINATION</li>
                    </Link>
                    </div>
                    
                
                    <div className="nav" to="/crew">
                    <Link to="/crew" style={{textDecoration: "none"}}>
                    <li
                    onClick={() => handleLinkClick(2)}
                    className={activeLink === 2 ? "active" : ""}
                    ><span>02</span>CREW</li>
                    </Link>
                    </div>
                   
                
                    <div className="nav" to="/technology">
                    <Link to="/technology" style={{textDecoration: "none"}}>
                    <li
                      onClick={() => handleLinkClick(3)}
                      className={activeLink === 3 ? "active" : ""}
                    ><span>03</span>TECHNOLOGY</li>
                    </Link>
                    </div>
                    
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header