import GalleryHomeData from "./GalleryHomeData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GalleryHome.css'

function GalleryHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false
    };
  return (
    <>
          <section className="collection">
              <div className="container top">
                  <Slider {...settings}>
                  {
                      GalleryHomeData.map((value) => {
                          return (
                              <div className="box">
                                  <img src={value.galleryHomeCover} alt="" />
                              </div>
                          )
                      })
                      }
                  </Slider>
              </div>
      </section>
    </>
  )
}

export default GalleryHome
