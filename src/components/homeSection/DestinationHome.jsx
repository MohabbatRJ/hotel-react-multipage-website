import React from 'react'
import AllItems from '../destination/AllItems'

function DestinationHome() {
  return (
    <>
          <section className="popular top">
              <div className="fullContainer">
                  <div className="heading">
                      <h1>Most Popular Destination</h1>
                      <div className="line"></div>
                  </div>

                  <div className="content">
                      <AllItems/>
                  </div>
              </div>
      </section>
    </>
  )
}

export default DestinationHome
