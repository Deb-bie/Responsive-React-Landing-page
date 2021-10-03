import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import video from '../../videos/video.mp4';
import './Home.css';
import { Button } from '../../Button/Button';
// import '../../Button/Button.css';


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
                    <Button 
                        to='signup' 
                        onMouseEnter={Hover} 
                        onMouseLeave={Hover}
                        primary='true'
                        dark='true'>

                        Get started {hover ? <MdArrowForward /> : <FaArrowRight />}
                    
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
