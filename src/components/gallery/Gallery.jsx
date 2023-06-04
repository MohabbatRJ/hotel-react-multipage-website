import HeadTitle from '../headTitle/HeadTitle'
import GalleryCard from './GalleryCard'
import GalleryData from './GalleryData'
import './Gallery.css'

function Gallery() {
  return (
    <>
          <HeadTitle />
          
          <section className="gallery top">
              <div className="container grid">
                  {
                      GalleryData.map((val,ind) => {
                          return <GalleryCard key={ind} images={val.imgSrc} title={ val.title} />
                      })
                  }
                  
            </div>
          </section>
    </>
  )
}

export default Gallery
