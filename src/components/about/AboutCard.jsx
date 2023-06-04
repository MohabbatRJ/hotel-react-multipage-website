import aboutImg1 from '../../assets/about-img-1.jpg'

function AboutCard() {
    return (
        <>
            <div className="aboutCard mtop flexSpace">
                <div className="row row1">
                    <h4>About Us</h4>
                    <h1>
                        We <span>Provide Solution</span> to grow your business
                    </h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, placeat nam ullam perspiciatis deserunt rem eveniet animi modi tempora voluptates atque tempore voluptatem saepe voluptas, exercitationem ipsa eaque laudantium vitae quae molestiae quia?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, placeat nam ullam perspiciatis deserunt rem eveniet animi modi tempora voluptates atque tempore voluptatem saepe voluptas, exercitationem ipsa eaque laudantium vitae quae molestiae quia?</p>

                    <button className='globalBtn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>

                <div className="row image">
                    <img src={aboutImg1} alt="" />
                    <div className="controlBtn">
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
