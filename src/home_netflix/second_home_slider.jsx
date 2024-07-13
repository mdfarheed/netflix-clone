import '../home_netflix_css/trailer_slider.css';
import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router';
const Second_Home_Slider = () => {
    const [controlsvisible, setcontrolsvisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.innerWidth <= '670') {
            setcontrolsvisible(false)
        }
    }, []);
    return (
        <>
            <Carousel indicators={false} controls={controlsvisible}>
                <Carousel.Item interval={2000}>

                    <img className='second_slider_img' src="https://www.mommysweird.com/wp-content/uploads/2017/10/stranger-things-2.jpg" alt="" />
                    <Carousel.Caption>
                        <button onClick={() => { navigate('/Stranger_Things') }} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>

                    <img className='second_slider_img' src="https://www.thebeyondnews.com/assets/admin/images/postimage/The-beyond-news-The%20Witcher-%20Season%202%20Web%20Series%202021-%20release%20date,%20cast,%20story,%20teaser,%20trailer,%20first%20look,%20rating,%20reviews,%20box%20office%20collection%20and%20preview.png" alt="" />
                    <Carousel.Caption>
                        <button onClick={() => { navigate('/The_Witcher') }} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>

                    <img className='second_slider_img' src="https://wallpaperaccess.com/full/3840074.png" alt="" />
                    <Carousel.Caption>
                        <button onClick={() => { navigate('/Dark') }} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>

                    <img className='second_slider_img' src="https://image.tmdb.org/t/p/original/uX4ppkaQfp8oZxBAcA8X9PIs0xW.jpg" alt="" />
                    <Carousel.Caption>
                        <button onClick={() => { navigate('/The_King') }} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>

                    <img className='second_slider_img' src="https://image.tmdb.org/t/p/w1280/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg" alt="" />
                    <Carousel.Caption>
                        <button onClick={() => { navigate('/The_Woman_King') }} className='btn btn_backgroun_color'>Striming Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Second_Home_Slider;