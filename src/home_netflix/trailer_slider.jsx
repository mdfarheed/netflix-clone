import '../home_netflix_css/trailer_slider.css';
import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router';
const Trailer_Slider = () => {
    const [controlsvisible, setcontrolsvisible] = useState(true);
    const navigate=useNavigate();

    useEffect(() => {
        if (window.innerWidth <= '670') {
            setcontrolsvisible(false)
        }
    }, []);
    return (
        <>
            <Carousel indicators={false} controls={controlsvisible}>
                <Carousel.Item interval={2000}>
                    <div class="ratio ratio-16x9">
                        <img src="/videos/netflix_slider_logo.jpg" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={13000}>
                    <div class="ratio ratio-16x9">
                        <video autoPlay loop muted  >
                            <source src="/videos/teaser_the_wicther.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <Carousel.Caption>
                        <h3 className='text_movie'>The Wicther</h3>
                        <button onClick={()=>{navigate('/The_Witcher')}} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={13000}>
                    <div class="ratio ratio-16x9">
                        <video autoPlay loop muted  >
                            <source src="/videos/teaser_stranger.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <Carousel.Caption className='mt-5'>
                        <h3 className='text_movie'>Stranger Things</h3>
                        <button onClick={()=>{navigate('/Stranger_Things')}} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={13000}>
                    <div class="ratio ratio-16x9">
                        <video autoPlay loop muted  >
                            <source src="/videos/teaser_squid_game.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <Carousel.Caption interval={10000}>
                        <h3 className='text_movie'>Squid Game</h3>
                        <button onClick={()=>{navigate('/Squid_Game')}} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={13000}>
                    <div class="ratio ratio-16x9">
                        <video autoPlay loop muted  >
                            <source src="/videos/teaser_money.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <Carousel.Caption interval={11000}>
                        <h3 className='text_movie'>Money Heist</h3>
                        <button onClick={()=>{navigate('/Money_Hiest')}} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </>
    )
}
export default Trailer_Slider;