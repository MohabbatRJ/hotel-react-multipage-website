import  { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import BlogData from '../BlogData';
import HeadTitle from '../../headTitle/HeadTitle';
import EmptyFile from '../../EmptyFile/EmptyFile';

function BlogSingle() {

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        let item = BlogData.find((item) => item.id === parseInt(id));
        console.log(item)

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
                        <Link to='/blog' className='globalBtn back'>
                            <i className='fas fa-long-arrow-alt-left'></i> Go Back
                        </Link>

                        <article className='content flex'>
                            <div className="mainContent">
                                <img src={item.cover} alt="" />

                                <div className="category flexSpace">
                                    <span>{item.date}</span>
                                    <label>{item.category}</label>
                                </div>

                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>

                                <h2>More About This</h2>
                                <div className="para flexSpace">
                                    <p>{item.para}</p>
                                    <p>{item.para}</p>
                                </div>

                                <p>{item.desc}</p>
                                <p>{item.desc}</p>
                            </div>

                            

                            <div className="sideContent">
                                <div className="categoryList">
                                    <h2>Category</h2>
                                    <hr />

                                    <ul>
                                        {
                                            BlogData.map((item) => {
                                                return (
                                                    <li>
                                                        <i className='far fa-play-circle'></i>
                                                        {item.category}
                                                    </li>
                                                )
                                            })
                                       }
                                    </ul>
                                </div>

                               
                            </div>

                            
                        </article>
                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default BlogSingle
