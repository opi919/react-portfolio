import Title from '../../assets/images/mop.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import Logo from '../Home/Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'm', 'e', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={`${letterClass} _15`}>H</span>
                        <span className={`${letterClass} _16`}>i</span>
                        <span className={`${letterClass} _17`}>,</span>
                        <br />
                        <span className={`${letterClass} _18`}>I</span>
                        <span className={`${letterClass} _19`}>'</span>
                        <span className={`${letterClass} _20`}>m</span>
                        <img src={Title} alt="title" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={21} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25} />
                    </h1>
                    <h2>Frontend Developer / Backend Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home