import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { toast } from "react-toastify";

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            refForm.current,
            process.env.REACT_APP_PUBLIC_KEY
        ).then(
            () => {
                toast.success('Message sent successfully')
                // push back
                refForm.current.reset()
            }, () => {
                toast.error('Message not sent')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="text" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message'></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact