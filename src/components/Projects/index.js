import { useEffect } from "react"
import { useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Slider from "react-slick"
import "./index.scss"
import $ from 'jquery'
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 5000,
    }

    return (
        <>
            <div className="container project-page">
                <div className="slide-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
                    </h1>
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn">Github</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mx-5">
                                <div className="card-body">
                                    <div className="left-part">
                                        <div className="card-title">Advanced</div>
                                        <div className="card-text">
                                            React Native with Typescript Tutorial
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul mt-5">
                                                {/* li with icon */}
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-2">React Native</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                                    <span className="ml-1">React Native</span>
                                                </li>
                                            </ul>
                                            <button className="btn mt-3">Git hub</button>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <img className="card-img-top" src="https://picsum.photos/200/300" />
                                        <span className="free">FREE</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects