import { Link } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css'
import NavbarComponent from './navbarComponent/NavbarComponent'
import LoginAreaNavbar from './navbarComponent/loginAreaNavbar';
import navbarData from './navbarData'
import navbarLoginData from './navbarLoginData'
import Headers from '../header/Headers';

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className="container flexSpace">
          <div className="menuIcon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>

            {
              navbarData.map((val, ind) => {
                // console.log(val, ind)
                return <NavbarComponent key={ind} link={val.linkName} visit={val.visitLink} funx={closeMobileMenu} />
              }
              )
            }

            <div className="mobileLoginArea">

              {
                navbarLoginData.map((val, ind) => {
                  // console.log(val, ind)
                  return <LoginAreaNavbar key={ind} link={val.linkName} visit={val.visitLink} funx={closeMobileMenu} />
                }
                )
              }

            </div>
          </ul>

          <div className="loginArea flexContainer">

            {
              navbarLoginData.map((val, ind) => {
                // console.log(val, ind)
                return <LoginAreaNavbar key={ind} link={val.linkName} visit={val.visitLink} />
              }
              )
            }

            <li>
              <Link to='/contactUs'>
                <button className="globalBtn">Request a Quote</button>
              </Link>
            </li>
          </div>

        </div>
      </nav>


      <Headers/>

    </>
  )
}

export default Navbar
