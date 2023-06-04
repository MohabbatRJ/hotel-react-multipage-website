import logo from '../../assets/logo.png';
import HeaderContact from './headerComponent/HeaderContact';
import headerData from './headerData';
import './header.css'

export default function Headers() {
  return (
      <div>
          <header className='header'>
              <div className="container flexSpace">
                  <div className="logo">
                      <img src={logo} alt="" />
                  </div>

                  <div className="contact flexSpace">
                      <div className="box flexSpace">
                          
                          {
                              headerData.map((val, ind) => {
                                  //   console.log(val);
                                  const { icon, heading, visit, textData } = val;
                                  return <HeaderContact key={ind} iconClass={icon} heading={heading} visit={visit} textData={textData} />
                              }
                              )
                          }
                      </div>
                  </div>
              </div>
          </header>
      </div>
  )
}
