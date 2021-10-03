import React from 'react';
import './Info.jsx';
import { Button } from '../../Button/Button';


const Info = () => {
    return (
        <div className="info-container">
            <div className="info-wrapper">
                <div className="info-row">
                    <div className="column1">
                        <div className="topline">
                            <div className="heading">
                                <div className="subtitle">
                                    <div className="button">
                                        <Button to='home'>Button</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
