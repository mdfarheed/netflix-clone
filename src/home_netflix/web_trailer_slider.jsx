import Carousel from 'react-grid-carousel';
import '../home_netflix_css/movies_name_text.css';
const Web_Trailer_Slider = () => {
    return (
        <>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalweb" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content model_color ">
                        <div class="modal-header">
                            <img src="/web/logo_header.png" className="logo_netflix_header" alt="" />
                            <button type="button" class="btn-close modal_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Not Available Becouse of Upcoming Series.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid mt-4">
                <div className="our-movie pb-2 text-white">
                    <h5 className="multi_slider_text">Upcoming Web Series</h5>
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
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://www.screenbinge.com/wp-content/uploads/2022/02/The-Tourist-1.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://i.ytimg.com/vi/0K6BT0F48fY/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://indiashorts.com/wp-content/uploads/2023/01/Safeimagekit-resized-img-36.png" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://i.ytimg.com/vi/GnjyOP8jsdE/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://cdn.mos.cms.futurecdn.net/vZygtNS3pKeH9W5BMhL5k4-1200-80.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://i.ytimg.com/vi/gk8cghpx4ao/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://metadata-static.plex.tv/7/gracenote/7a4a9cb4f5ee753a25799d48344e6834.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://www.livemint.com/lm-img/img/2023/03/27/1600x900/Netflix_1679896004468_1679896083422_1679896083422.PNG" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://i.ytimg.com/vi/lNXxbHg3IfQ/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/The-Midnight-Club-Season-1.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://i.ytimg.com/vi/owWeQ2_Oir0/maxresdefault.jpg" className='img-fluid home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalweb"><img width="48%" src="https://staticg.sportskeeda.com/editor/2022/08/8f18b-16606598852062-1920.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Web_Trailer_Slider;