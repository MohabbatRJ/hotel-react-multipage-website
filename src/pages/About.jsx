
import AboutCard from '../components/about/AboutCard'
import featureImage1 from '../assets/feature-img-1.jpg'
import '../components/about/about.css'
import HeadTitle from '../components/headTitle/HeadTitle'

function About() {
    return (
        <>
            <HeadTitle/>

            <section className="about top ">
                <div className="container ">
                    <AboutCard/>
                </div>
            </section>


            <section className="features top">
                <div className="container aboutCard flexSpace">
                    <div className="row row1">
                        <h1>Our <span>Features</span> </h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, placeat nam ullam perspiciatis deserunt rem eveniet animi modi tempora voluptates atque tempore voluptatem saepe voluptas, exercitationem ipsa eaque laudantium vitae quae molestiae quia?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, placeat nam ullam perspiciatis deserunt rem eveniet animi modi tempora voluptates atque tempore voluptatem saepe voluptas, exercitationem ipsa eaque laudantium vitae quae molestiae quia?</p>

                        <button className='globalBtn'>
                            Explore More <i className='fas fa-long-arrow-alt-right'></i>
                        </button>
                    </div>

                    <div className="row image">
                        <img src={featureImage1} alt="" />
                        <div className="controlBtn">
                            <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
