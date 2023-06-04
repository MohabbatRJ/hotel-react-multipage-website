import  { useState } from 'react'

function GalleryCard(props) {
    const { images, title } = props;
    const [popup, setPopup] = useState(false);
    const toggleModal = () => {
        console.log('clicked');
        setPopup(!popup);
    }
  return (
    <>
     <div className="items">
              <div className='img'>
                  <img src={images} alt="" />
                  <button onClick={toggleModal}>
                  <i className="fas fa-image" ></i>
                      
                  </button>
              </div>

              <div className="title">
                  <h3>{ title }</h3>
              </div>
          </div> 
          
          {popup && (
              <div className="popup">
                  <div className="hide"></div>
                  <div className="popupContent">
                      <button onClick={toggleModal}>
                          <i className='fas fa-times'></i>
                      </button>
                      <img src={images} alt="" />
                  </div>
              </div>
          )}
    </>
  )
}

export default GalleryCard
