import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/mop.png'
import LogoSub from '../../assets/images/MM1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faGears } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

    const setActive = (e) => {
        console.log(e.target.href)
        // const links = document.querySelectorAll('.nav-link')
        // links.forEach(link => {
        //     link.classList.remove('nav-active')
        // })
        // e.target.classList.add('nav-active')
    }

    return (
        <div className="nav-bar">
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSub} alt="subtitle" />
            </Link>
            <nav>
                <NavLink exact="true" to="home" className="nav-link" onClick={setActive}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" to="about" className='about-link nav-link' onClick={setActive}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" to="skills" className='skill-link nav-link' onClick={setActive}>
                    <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" to="contact" className='contact-link nav-link' onClick={setActive}>
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
}
export default Sidebar