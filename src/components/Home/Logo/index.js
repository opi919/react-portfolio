import './index.scss'
import LogoS from '../../../assets/images/mop.png'

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={LogoS} alt="s-logo" className="s-logo" />
        </div>
    )
}

export default Logo