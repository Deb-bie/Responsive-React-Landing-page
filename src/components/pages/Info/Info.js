import React from 'react';
import './Info.jsx';
import { Button } from '../../Button/Button';
import { InfoContainer } from './Info.jsx';
import { InfoWrapper } from './Info.jsx';
import { InfoRow } from './Info.jsx';
import { Column1 } from './Info.jsx';
import { TextWrapper } from './Info.jsx';
import { TopLine } from './Info.jsx';
import { Heading } from './Info.jsx';
import { Subtitle } from './Info.jsx';
import { BtnWrap } from './Info.jsx';
import { Column2 } from './Info.jsx';
import { ImgWrap } from './Info.jsx';
import { Img } from './Info.jsx';
// import { Button } from 'react-scroll';
// import './Data';
// import imgs from './car.svg';


const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img,  alt}, primary, dark, dark2) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {/* <Img src={img} alt={alt} /> */}
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                            {/* <img src="../../videos/1.jpg" alt="car" /> */}
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
