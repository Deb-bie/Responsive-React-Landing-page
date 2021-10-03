import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import video from '../../videos/video.mp4';
import './Home.css';
import '../../Button/Button.css';

function Home() {

    const [hover, setHover] = useState(false);

    const Hover = () => {setHover(!hover)};



    return (
        <div className="main-container" id="home">
            <div className="main-background">
                <video className="video-background" autoPlay loop muted src={video} typeof="video/mp4" />
            </div>

            <div className="main-content">
                <h1 className="title">Virtual Banking Made Easy</h1>
                <p>
                    Sign up for a new account today and receive $250 in credit towards 
                    your next payment.
                </p>
                <div className="button">
                    <button to='signup' onMouseEnter={Hover} onMouseLeave={Hover}>
                        Get started {hover ? <MdArrowForward /> : <FaArrowRight />}
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
