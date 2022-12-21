import { useEffect } from "react"
import { useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Slider from "react-slick"
import "./index.scss"
import $ from 'jquery'
import { faReact, faJsSquare, faHtml5, faSass, faPhp, faCss3, faLaravel } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
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
                                        <div className="card-title">Basic</div>
                                        <div className="card-text">
                                            BlackJack Game
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                                    <span className="ml-2">Html</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                            </ul>
                                            <button className="btn" style={{ marginRight: "5px" }}><a href="https://github.com/opi919/blackJack-game" target="_blank">Github</a></button>
                                            <button className="btn"><a href="https://opi919.github.io/blackJack-game/" target="_blank">Wbsite</a></button>
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
                                            Natours advanced css and sass
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                                    <span className="ml-2">Html</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faSass} color='#c76494' />
                                                    <span className="ml-2">Sass</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faPhp} color='#464a85' />
                                                    <span className="ml-2">PHP</span>
                                                </li>
                                            </ul>
                                            <button className="btn" style={{ marginRight: "5px" }}><a href="https://github.com/opi919/natours-advanced-css-and-sass" target="_blank">Github</a></button>
                                            <button className="btn"><a href="https://opi919.github.io/natours-advanced-css-and-sass/" target="_blank">Wbsite</a></button>
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
                                            Matching Game
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                                    <span className="ml-2">Html</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCss3} color='#254bdd' />
                                                    <span className="ml-2">CSS</span>
                                                </li>
                                            </ul>
                                            <button className="btn" style={{ marginRight: "5px" }}><a href="https://github.com/opi919/matching-game" target="_blank">Github</a></button>
                                            <button className="btn"><a href="https://opi919.github.io/matching-game/" target="_blank">Wbsite</a></button>
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
                                        <div className="card-title">Basic</div>
                                        <div className="card-text">
                                            Rock Paper Scissor
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                                    <span className="ml-2">Html</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCss3} color='#254bdd' />
                                                    <span className="ml-2">CSS</span>
                                                </li>
                                            </ul>
                                            <button className="btn" style={{ marginRight: "5px" }}><a href="https://github.com/opi919/rock-paper-scissor" target="_blank">Github</a></button>
                                            <button className="btn"><a href="https://opi919.github.io/rock-paper-scissor/" target="_blank">Wbsite</a></button>
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
                                        <div className="card-title">Basic</div>
                                        <div className="card-text">
                                            Pig Game
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                                    <span className="ml-2">Html</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCss3} color='#254bdd' />
                                                    <span className="ml-2">CSS</span>
                                                </li>
                                            </ul>
                                            <button className="btn" style={{ marginRight: "5px" }}><a href="https://github.com/opi919/pig-game" target="_blank">Github</a></button>
                                            <button className="btn"><a href="https://opi919.github.io/pig-game/" target="_blank">Wbsite</a></button>
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
                                            Amar Vasha
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://amarvasha.tinkers.ltd/" target="_blank">Wbsite</a></button>
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
                                        <div className="card-title">Basic</div>
                                        <div className="card-text">
                                            Tinkers Technologies Limited
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://tinkers.ltd/about" target="_blank">Wbsite</a></button>
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
                                        <div className="card-title">Basic</div>
                                        <div className="card-text">
                                            Library Management System
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://github.com/opi919/Laravel-Library-Management" target="_blank">Github</a></button>
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
                                            Content Management System
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://content.amarvasha.net/login" target="_blank">Website</a></button>
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
                                            School Management System
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://github.com/opi919/School-Management-Syestem" target="_blank">Github</a></button>
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
                                            Easy memo app
                                        </div>
                                        <div className="bottom">
                                            <ul className="card-ul">
                                                <li>
                                                    <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                                                    <span className="ml-2">Laravel</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                                    <span className="ml-2">Javascript</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faDatabase} color='#ea8c10' />
                                                    <span className="ml-2">MySQL</span>
                                                </li>
                                            </ul>
                                            <button className="btn"><a href="https://github.com/opi919/EasyMemo" target="_blank">Github</a></button>
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