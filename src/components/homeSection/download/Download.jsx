
import appStore from '../../../assets/appstore-button.png'
import googleStore from '../../../assets/google-play-button.png'
import appImg from '../../../assets/app-image-1.png'
import './Download.css'
function Download() {
  return (
    <>
          <section className="download top">
              <div className="container flexSpace">
                  <div className="row">
                      <h3>Download Our App</h3>
                      <h1>WOW! Get This Template  App For Your Mobile</h1>
                      <ul>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                          <li>
                              &#10003; Get Paperless Confirmation
                          </li>
                      </ul>

                      <div className="img flex">
                          <img src={appStore} alt="" />
                          <img src={googleStore} alt="" />
                      </div>
                  </div>

                  <div className="row row2">
                      <img src={appImg} alt="" />
                  </div>
              </div>
          </section> 
    </>
  )
}

export default Download
