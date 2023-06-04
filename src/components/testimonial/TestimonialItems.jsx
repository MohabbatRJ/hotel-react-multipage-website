import React from 'react'
import TestimonialData from './TestimonialData'
import TestimonialCard from './TestimonialCard'

function TestimonialItems() {
  return (
    <>
          <section className='testimonial mtop'>
              <div className="container grid1">
                  {
                      TestimonialData.map((value, index) => {
                          return <TestimonialCard key = { index } {...value }/>
                      })
                  }
              </div>
     </section>
    </>
  )
}

export default TestimonialItems
