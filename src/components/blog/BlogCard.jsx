import { Link } from "react-router-dom"


function BlogCard({item: {id, date, category, title, cover, para, desc}}) {
  return (
    <>
          <div className="items">
              <div className="img">
                <img src={cover} alt="" />
              </div> 
              
              <div className="category flexSpace">
                  <span>{date}</span>
                  <label>{category}</label>
              </div>

              <div className="detail">
                  <h5>{title }</h5>
                  <p>{para }</p>
              </div>

              <Link to={`/blogSingle/${id}`} className="blogItemLink">
                  READ MORE <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
      </div>
    </>
  )
}

export default BlogCard
