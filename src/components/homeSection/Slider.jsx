import { useState } from 'react';
import Data from './Data'

function Slider( {slides} ) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <>
            <section className='slider'>
                {/* <div className="container"> */}
                <div className="controlBtn">
                    <button className='prev' onClick={prevSlide}>
                        <i className='fas fa-angle-right'></i>
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <i className='fas fa-angle-left'></i>
                    </button>
                </div>
            

            {
                Data.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}> 
                            {
                                index === current && <img src={slide.imageSrc
                                } alt={index} />
                            }
                        </div>
                    )
                })
                    }

                    
                {/* </div> */}


            </section>
            
            <section className="slideForm">
                <div className="container">
                    <h2>Enjoy Your Holiday</h2>
                    <span>Search and Book Hotel</span>

                    <form action="">
                        <input type="text" placeholder='Search City' name='' id='' />

                        <div className="flexSpace">
                            <input type="date" placeholder='Check In' />
                            <input type="date" placeholder='Check Out' />
                        </div>

                        <div className="flexSpace">
                            <input type="number" placeholder='Adult(s)(+18)' />
                            <input type="number" placeholder='Children(0 - 17)' />
                        </div>

                        <input type="number" placeholder='Rooms' />
                        <input type="Submit" value='Search' className='submit' />
                    </form>
                </div>
            </section>

        </>
    )
}

export default Slider
