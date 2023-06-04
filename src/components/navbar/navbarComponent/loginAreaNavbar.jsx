import { Link } from 'react-router-dom'
function loginAreaNavbar(props) {
    const { link, visit, funx } = props;
    return (
        <>
            <li>
                <Link to={visit} target='_self' onClick={funx}>
                    {/* <i className="fas fa-chevron-right"></i> */}
                    {link}
                </Link>
            </li>
        </>
    )
}

export default loginAreaNavbar
