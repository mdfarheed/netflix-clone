import Carousel from 'react-grid-carousel';
import '../home_netflix_css/movies_name_text.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const Movies_Slider_Home = () => {
    const navigate=useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="our-movie pb-2 text-white">
                    <h5 className="multi_slider_text">Our Movies</h5>
                </div>
                <Carousel cols={3}
                    rows={1}
                    gap={1}
                    responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 3
                        },
                        {
                            breakpoint: 990,
                            cols: 2
                        },
                        {
                            breakpoint: 769,
                            cols: 2
                        }
                    ]} mobileBreakpoint={670}>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Heart_Of_Stone')}}><img width="48%" src="https://etvbharatimages.akamaized.net/etvbharat/prod-images/11-08-2023/1200-675-19238128-1016-19238128-1691739074964.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/Avenger_Infinity_War')}}><img width="48%" src="https://wallpapercave.com/wp/wp3760868.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Avenger_End_Game')}}><img width="48%" src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-4931_UHD-Full-Image_GalleryCover-en-US-1566321346895._UR1920,1080_RI_.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/Mother_Of_The_Bride')}}><img width="48%" src="https://metadata-static.plex.tv/0/gracenote/0454d028d469bce20ce4d5da3ec00402.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Jawan')}}><img width="48%" src="https://newsd.in/wp-content/uploads/2023/09/Jawan-Advance-Booking.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/RRR')}}><img width="48%" src="https://www.liveakhbar.in/wp-content/uploads/2022/05/RRR-Movie-Review_1648825470847_1648825479894.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Bahubali')}}><img width="48%" src="https://1.bp.blogspot.com/-DEN42gaOHyM/V6eN-k2iHRI/AAAAAAAAABk/kvJ-qf0g7xQcz0JEmY8bmok7jHNYQRNyACLcB/s1600/baahubali-poster-21.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/PK')}}><img width="48%" src="https://3.bp.blogspot.com/-T6lvKLKZbtw/VKGOQHmzwbI/AAAAAAAAB-4/D0r2qbtgBtQ/s1600/Pk-Peekay-FIlm-Poster-756022.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/MoneyBall')}}><img width="48%" src="https://ntvb.tmsimg.com/assets/p8417791_v_h8_ai.jpg?w=1280&h=720" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/Mario_Bros')}}><img width="48%" src="https://images.indianexpress.com/2023/04/The-Super-Mario-Bros-Movie.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/The_Woman_King')}}><img width="48%" src="https://image.tmdb.org/t/p/original/nZvMQLmerYMdMa7mM56OuhjncAo.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/The_Wonder')}}><img width="48%" src="https://indiashorts.com/wp-content/uploads/2023/01/Safeimagekit-resized-img.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/The_King')}}><img width="48%" src="https://image.tmdb.org/t/p/original/uX4ppkaQfp8oZxBAcA8X9PIs0xW.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/The_Power_Of_The_Dog')}}><img width="48%" src="https://prdaficalmjediwestussa.blob.core.windows.net/images/2022/03/AWARDS21_THE-POWER-OF-THE-DOG_ASSETS_v1_1.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Mariage_Story')}}><img width="48%" src="https://image.tmdb.org/t/p/original/32Ra74Drd5luy7afIcwxIjO4JSJ.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/To_Leslie')}}><img width="48%" src="https://v.lfushaar.com/wp-content/uploads/2023/03/To-Leslie-2022.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={()=>{navigate('/Da_5_Bloods')}}><img width="48%" src="https://bingeddata.s3.amazonaws.com/uploads/2020/06/Da-5-Bloods-Netflix-Movie-Review.jpg" className='img-fluid home_img_zoom' /></a>
                            <a onClick={()=>{navigate('/Avatar')}}><img width="48%" src="https://image.tmdb.org/t/p/original/lnruVIIORWgQO2FS7GZV65dFEOG.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Movies_Slider_Home;