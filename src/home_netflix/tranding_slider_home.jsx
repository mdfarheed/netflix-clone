import Carousel from 'react-grid-carousel';
import '../home_netflix_css/movies_name_text.css';
import { useNavigate } from 'react-router';
const Tranding_Slider_Home = () => {
    const navigate=useNavigate();
    return (
        <>
            <div className="container-fluid mt-4 mb-5">
                <div className="our-movie pb-2 text-white">
                    <h5 className="multi_slider_text">Tranding Now</h5>
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
                            <a onClick={() => { navigate('/Heeramandi') }}><img width="48%" src="https://lehren.com/wp-content/uploads/2023/02/sanjay-leela-bhansalis-heeramandi-1068x601.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Avatar') }}><img width="48%" src="https://image.tmdb.org/t/p/original/lnruVIIORWgQO2FS7GZV65dFEOG.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/The_King') }}><img width="48%" src="https://image.tmdb.org/t/p/original/uX4ppkaQfp8oZxBAcA8X9PIs0xW.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/All_Of_Us_Are_Dead') }}><img width="48%" src="/web/all_of_us_are_dead.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/Never_Have_I_Ever') }}><img width="48%" src="/web/never_have_i_ever.png" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Mario_Bros') }}><img width="48%" src="https://images.indianexpress.com/2023/04/The-Super-Mario-Bros-Movie.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/PK') }}><img width="48%" src="https://3.bp.blogspot.com/-T6lvKLKZbtw/VKGOQHmzwbI/AAAAAAAAB-4/D0r2qbtgBtQ/s1600/Pk-Peekay-FIlm-Poster-756022.jpg" className='img-fluid position-absolute top-0 start-0 me-1 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Cobra_kai') }}><img width="48%" src="/web/cobra_kai.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/Avenger_End_Game') }}><img width="48%" src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/disney-4931_UHD-Full-Image_GalleryCover-en-US-1566321346895._UR1920,1080_RI_.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Dark') }}><img width="48%" src="/web/dark.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/Sex_Education') }}><img width="48%" src="/web/sex_education.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Heart_Of_Stone') }}><img width="48%" src="https://etvbharatimages.akamaized.net/etvbharat/prod-images/11-08-2023/1200-675-19238128-1016-19238128-1691739074964.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/Mother_Of_The_Bride') }}><img width="48%" src="https://metadata-static.plex.tv/0/gracenote/0454d028d469bce20ce4d5da3ec00402.jpg" className='img-fluid position-absolute top-0 start-0 me-1 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/13_Reasons_Why') }}><img width="48%" src="/web/13_reasons.webp" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/Bahubali') }}><img width="48%" src="https://1.bp.blogspot.com/-DEN42gaOHyM/V6eN-k2iHRI/AAAAAAAAABk/kvJ-qf0g7xQcz0JEmY8bmok7jHNYQRNyACLcB/s1600/baahubali-poster-21.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a onClick={() => { navigate('/The_Witcher') }}><img width="48%" src="/web/the_witcher.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a onClick={() => { navigate('/The_Woman_King') }}><img width="48%" src="https://image.tmdb.org/t/p/original/nZvMQLmerYMdMa7mM56OuhjncAo.jpg" className='img-fluid home_img_zoom' /></a>
                            <a onClick={() => { navigate('/Cobra_kai') }}><img width="48%" src="/web/cobra_kai.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Tranding_Slider_Home;