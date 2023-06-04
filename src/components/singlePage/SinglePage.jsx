import React, { useEffect, useState } from 'react'
import HeadTitle from '../headTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom'
import DestinationData from '../destination/DestinationData';
import EmptyFile from '../EmptyFile/EmptyFile';
import './Single.css'

function SinglePage() {

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        let item = DestinationData.find((item) => item.id === parseInt(id));

        if (item) {
            setItem(item)
        }
    }, [id])

  return (
    <>
          <HeadTitle />
          {item ? (
          <section className="singlePage top">
              <div className="container">
                  <Link to='/destination' className='globalBtn back'>
                      <i className='fas fa-long-arrow-alt-left'></i> Go Back
                  </Link>

                  <article className='content flex'>
                      <div className="mainContent">
                              <img src={item.image} alt="" />
                              <p>{item.desc}</p>
                              <p>{item.desc}</p>
                              
                              <div className="para flexSpace">
                                  <p>{ item.sidePara }</p>
                                  <p>{ item.sidePara }</p>
                              </div>

                              <h1>What is the {item.title} city?</h1>
                              <p>{item.desc}</p>

                              <div className="image grid1">
                                  <img src={item.paraImageOne} alt="" />
                                  <img src={item.paraImageTwo} alt="" />
                              </div>
                              <p>{item.desc}</p>
                          </div>
                          
                          <div className="sideContent">
                              <div className="box">
                                  <h2>How can we help you?</h2>
                                  <p>{item.sidePara}</p>
                                  
                                  <button className='outlineBtn'>
                                      <i className='fa fa-phone-alt'></i>   Contact Us
                                  </button>
                              </div>

                              <div className="box2">
                                  <p>{item.sidePara}</p>
                              </div>
                          </div>
                  </article>
              </div>
              </section>
          ) : (
                  <EmptyFile/>
          )}
    </>
  )
}

export default SinglePage
