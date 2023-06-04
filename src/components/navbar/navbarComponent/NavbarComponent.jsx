import { Link } from 'react-router-dom'

function NavbarComponent(props) {
    // eslint-disable-next-line react/prop-types
    const {link, visit, funx}= props;
    // console.log(props)
    return (
        <>
            <li>
                <Link to={visit} onClick={funx}>{link}</Link>
            </li>
        </>
    )
}

export default NavbarComponent
