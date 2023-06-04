import React, { useState } from 'react'
import DestinationCard from './DestinationCard'
import DestinationData from './DestinationData'

function AllItems() {
    const [items, setItems] = useState(DestinationData);
  return (
    <>
          <section className="gallery mtop dest">
              <div className="container">
                  <div className="content grid">
                      {
                          items.map((item) => {
                              return <DestinationCard key={item.id} item={ item} />
                          })
                      }
                  </div>
              </div>
      </section>
    </>
  )
}

export default AllItems
