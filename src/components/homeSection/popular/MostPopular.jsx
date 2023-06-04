
import PopularCard from './PopularCard'
import './Popular.css'
function MostPopular() {
  return (
    <>
          <section className="popular top">
              <div className="container">
                  <div className="heading">
                      <h1>Most Popular Hotels</h1>
                      <div className="line"></div>
                  </div>

                  <div className="content">
                      <PopularCard />
                  </div>
              </div>
          </section>
    </>
  )
}

export default MostPopular
