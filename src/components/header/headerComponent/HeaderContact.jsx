import { Link } from 'react-router-dom';

const HeaderContact = (props) => {
  console.log(props);

  const { iconClass, heading, visit, textData } = props;

  return (
    <>
      
        <div className="icons">
          <i className={iconClass}></i>
        </div>

        <div className="text">
          <h5>{heading}</h5>
          <Link to={visit}>{textData}</Link>
        </div>
     
    </>
  )
}

export default HeaderContact

