import React from 'react'
import { Link } from 'react-router-dom'

function DestinationCard({item : {id, image, title, desc, sidePara, paraImageOne, paraImageTwo}}) {
  return (
    <>
          <div className="items">
              <div className="img">
                  <img src={image} alt="" />

                  <Link to={`/singlePage/${id}`} className='blogItemLink'>
                      <i className="fas fa-external-link-alt"></i>
                  </Link>
              </div>

              <div className="title">
                  <h3>{title }</h3>
              </div>
      </div>
    </>
  )
}

export default DestinationCard
