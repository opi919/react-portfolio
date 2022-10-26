import './index.scss'
import LogoS from '../../../assets/images/mop.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()


    useEffect(() => {
            gsap.registerPlugin(DrawSVGPlugin)

            gsap.timeline().to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
                .from(outlineLogoRef.current, {
                    drawSVG: 0,
                    duration: 10,
                })
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} src={LogoS} alt="s-logo" className="s-logo" />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="544.000000pt" height="835.000000pt" viewBox="0 0 544.000000 835.000000"
                preserveAspectRatio="xMidYMid meet">

                <g className='svg-container' transform="translate(0.000000,835.000000) scale(0.100000,-0.100000)"
                    fill="#0000">
                    <path ref={outlineLogoRef} d="M430 4155 l0 -4115 548 2 547 3 3 3110 4 3110 218 -1605 c119 -883
309 -2283 421 -3112 l203 -1508 493 0 c386 0 495 3 498 12 3 7 192 1397 420
3088 228 1691 419 3089 424 3105 5 17 9 -1276 10 -3087 l1 -3118 545 0 545 0
0 4115 0 4115 -880 0 c-484 0 -880 -4 -880 -8 0 -19 -671 -4958 -674 -4967 -3
-5 -5 -3 -6 5 -1 8 -153 1129 -338 2490 l-338 2475 -882 3 -882 2 0 -4115z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo