
import DestinationHome from '../components/homeSection/DestinationHome'
import Hero from '../components/homeSection/Hero'
import HomeAbout from '../components/homeSection/HomeAbout'
import Download from '../components/homeSection/download/Download'
import GalleryHome from '../components/homeSection/gallery/GalleryHome'
import MostPopular from '../components/homeSection/popular/MostPopular'
import Work from '../components/homeSection/work/Work'

function Home() {
  return (
    <>
      <Hero />
      
      <HomeAbout />

      <MostPopular/>
      
      <DestinationHome />
      
      <Download />
      
      <Work />
      
      <GalleryHome/>
    </>
  )
}

export default Home
