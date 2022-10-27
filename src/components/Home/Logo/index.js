import './index.scss'
import LogoS from '../../../assets/images/MOP1.png'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

const Logo = () => {

    function animation() {
        anime({
            targets: '.svg-logo path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 10000,
            direction: 'alternate',
            loop: false,
            delay: 1000,
        });
    }

    useEffect(() => {
        animation()
    }, [])



    return (
        <div className="logo-container">
            <img src={LogoS} alt="s-logo" className="s-logo" />
            <svg className='svg-logo' version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="580.000000pt" height="930.000000pt" viewBox="0 0 560.000000 900.000000"
                preserveAspectRatio="xMidYMid meet">

                <g className='svg-container' transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                    fill="none" stroke="none">
                    <path d="M190 4600 l0 -3830 725 0 725 0 1 1618 c0 889 4 1606 9 1592 5 -14
111 -742 236 -1618 l228 -1592 680 2 680 3 225 1562 226 1562 3 -1564 2 -1565
740 0 740 0 0 3830 0 3830 -1065 0 -1065 0 -5 -22 c-2 -13 -110 -763 -240
-1668 -129 -905 -237 -1649 -239 -1655 -4 -13 4 -66 -264 1780 l-227 1560
-1058 3 -1057 2 0 -3830z m338 -2 l-3 -3813 -157 -3 -158 -3 0 3816 0 3815
160 0 160 0 -2 -3812z m1762 3806 c0 -14 681 -4678 683 -4680 3 -3 678 4663
677 4679 0 4 392 7 870 7 l870 0 0 -3815 0 -3815 -535 0 -535 0 0 2911 c0
2252 -3 2910 -12 2907 -8 -3 -154 -991 -430 -2899 -230 -1592 -420 -2900 -423
-2906 -3 -10 -109 -13 -484 -13 -264 0 -482 4 -485 8 -2 4 -192 1308 -421
2897 -229 1590 -419 2897 -423 2905 -4 8 -9 -1294 -12 -2895 l-5 -2910 -537
-3 -538 -2 0 3815 0 3815 870 0 c479 0 870 -2 870 -6z m1340 0 c0 -3 -146
-1023 -325 -2266 -179 -1243 -325 -2268 -326 -2277 -2 -42 -16 47 -93 577
l-82 567 72 495 c39 272 149 1038 244 1703 l174 1207 168 0 c92 0 168 -3 168
-6z m665 -7612 c-3 -10 -44 -12 -172 -10 l-168 3 -3 1623 -2 1624 165 1166
c91 642 169 1181 173 1197 4 17 8 -1234 10 -2780 1 -1545 0 -2816 -3 -2823z
m-2240 2807 c222 -1542 401 -2807 399 -2811 -5 -8 -324 -12 -324 -4 0 1 -108
754 -239 1672 l-239 1669 -6 1144 c-3 629 -3 1141 0 1138 3 -3 187 -1266 409
-2808z"/>
                </g>
            </svg>

        </div>
    )
}

export default Logo