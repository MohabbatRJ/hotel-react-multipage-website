

function TestimonialCard(props) {
    const { desc, profile, name, post } = props;
  return (
    <>
          <div className="box">
              <i className="fa fa-quote-left"></i>
              <div className="para">
                  <p>{desc}</p>
              </div>

              <hr />
              <div className="details flex">
                  <div className="img">
                      <img src={profile} alt="" />
                  </div>

                  <div className="name">
                      <h3>{name}</h3>
                      <span>{post}</span>
                  </div>
              </div>
      </div>
    </>
  )
}

export default TestimonialCard
