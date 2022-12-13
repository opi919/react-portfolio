import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import $ from 'jquery'
import "../../assets/3D-Interactive-SVG-Tag-Cloud-Plugin-With-jQuery-SVG-3D-Tag-Cloud/js/jquery.svg3dtagcloud"
import resume from "../../assets/resume.pdf"

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    $(document).ready(function () {
        console.log('ready')

        var entries = [

            { label: 'HTML' },
            { label: 'CSS' },
            { label: 'JavaScript' },
            { label: 'React' },
            { label: 'Node.js' },
            { label: 'MongoDB' },
            { label: 'C++' },
            { label: 'Bootstrap' },
            { label: 'Java' },
            { label: 'PHP' },
            { label: 'MySQL' },
            { label: 'Git' },
            { label: 'GitHub' },
            { label: 'Linux' },
            { label: 'Windows' },
            { label: 'C' },
            { label: 'Laravel' },
            { label: 'JQuery' },
            { label: 'Lumen' },
            { label: 'Flutter' },
            { label: 'Dart' },
            { label: 'Firebase' },
            { label: 'Heroku' },
            { label: 'Kotlin' },
            { label: 'Tailwind css' },
            { label: 'VsCode' },
            { label: 'Android' },

        ];

        var settings = {

            entries: entries,
            width: 680,
            height: 680,
            radius: '65%',
            radiusMin: 75,
            bgDraw: false,
            bgColor: 'none',
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 6,
            fov: 350,
            speed: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '18',
            fontColor: '#fff',
            fontWeight: 'bold',//bold
            fontStyle: 'normal',//italic 
            fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            fontToUpperCase: true,
            tooltipFontFamily: 'Oswald, Arial, sans-serif',
            tooltipFontSize: '15',
            tooltipFontColor: '#fff',
            tooltipFontWeight: 'normal',//bold
            tooltipFontStyle: 'normal',//italic 
            tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            tooltipFontToUpperCase: false,
            tooltipTextAnchor: 'left',
            tooltipDiffX: 0,
            tooltipDiffY: 10,
            animatingSpeed: 0.01,
            animatingRadiusLimit: 1.3
        };

        $('#tag').svg3DTagCloud(settings);

    });

    return (
        <>
            <div className="container skill-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={5} />
                    </h1>
                    <p>
                        Experience in front-end and back-end development including technologies like <span>Html5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>React</span>, <span>Bootstrap</span>, <span>Tailwind CSS</span>, <span>Jquery</span>, <span>Flutter</span>, <span>Dart</span>, <span>Firebase</span>, <span>Heroku</span>, <span>Laravel</span>, <span>Lumen</span>, <span>Nodejs</span>, <span>Mysql</span>.
                    </p>
                    <p>
                        I'm not a designer but i have a good sense of design and experience in backend development with <span>Laravel</span>. I put special effort into optimizing and providing a good user experience. I would love to give you a hand with your project. I guranatee a commitment during the project and a good communication.
                    </p>
                    <p>
                        Visit my <a href="https://www.linkedin.com/in/momen-khandoker-048110214/">Linkedin</a> profile for more details. Also, you can check out my resume <a href={resume} download="MyResume">here</a>.
                    </p>
                </div>
                <div className="animation-zone">
                    <div className='tag' id='tag'></div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills