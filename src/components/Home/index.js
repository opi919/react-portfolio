import Title from '../../assets/images/mop.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import Logo from '../Home/Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'm', 'e', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _10`}>H</span>
                    <span className={`${letterClass} _11`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _15`}>m</span>
                    <img src={Title} alt="title" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>Frontend Developer / Backend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Home