import React from 'react'

function WorkCard(props) {
  const { cover, title, desc } = props;
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>

        <div className="details">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default WorkCard
