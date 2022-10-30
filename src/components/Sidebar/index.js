import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/mop.png'
import LogoSub from '../../assets/images/MM1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    <div className="nav-bar">
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSub} alt="subtitle" />
        </Link>
        <nav>
            <NavLink exact="true" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" to="about" className='about-link nav-link'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" to="/contact" className='contact-link nav-link'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/opi919">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/profile.php?id=100007501185769">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/momen-khandoker-048110214/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar