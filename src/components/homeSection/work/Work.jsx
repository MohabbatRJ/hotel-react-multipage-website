import React from 'react'
import WorkCard from './WorkCard'
import WorkData from './WorkData'
import './Work.css'
function Work() {
  return (
    <>
          <section className="popular work">
              <div className="container">
                  <div className="heading">
                      <h1>How it Works</h1>
                      <div className="line"></div>
                  </div>

          <div className="content grid">
            {
              WorkData.map((value, index) => {
                return <WorkCard key={index} cover={value.coverWork} title={value.title} desc={value.desc} />
              })
            }
                  </div>
              </div>
          </section> 
    </>
  )
}

export default Work
