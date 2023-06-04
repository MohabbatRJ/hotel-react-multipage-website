import Data from "./Data"
import Slider from "./Slider"
import './home.css'

function Hero() {
  return (
    <div>
          <Slider slides={ Data} />
    </div>
  )
}

export default Hero
