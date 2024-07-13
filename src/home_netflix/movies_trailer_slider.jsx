import Carousel from 'react-grid-carousel';
import '../home_netflix_css/movies_name_text.css';
const Movies_Trailer_Slider = () => {
    return (
        <>



 {/* <!-- Modal --> */}
 <div class="modal fade" id="exampleModalmovie" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content model_color ">
                        <div class="modal-header">
                            <img src="/web/logo_header.png" className="logo_netflix_header" alt="" />
                            <button type="button" class="btn-close modal_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Not Available Becouse of Upcoming Movie.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid mt-4 mb-5">
                <div className="our-movie pb-2 text-white">
                    <h5 className="multi_slider_text">Upcoming Movies</h5>
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
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://ntvb.tmsimg.com/assets/p16225339_v_h8_al.jpg?w=1280&h=720" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://phantom-marca.unidadeditorial.es/20d1d4c41b016f1a446b69a2443e26e9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/28/16196182555367.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://img.kocpc.com.tw/wp-content/uploads/2021/12/1639293352-abb8926c99ea4ac327de659e45903436.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://i.ytimg.com/vi/5D3d-ZaY5Yg/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://cdn.shopify.com/s/files/1/0375/3020/6345/files/image1_bce7a766-4fbd-4f71-90ba-3e5605359eee.jpg?v=1704972674" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://flxt.tmsimg.com/assets/p18111008_v_h8_ac.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://i.ytimg.com/vi/iqOS2j-aphY/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://www.pennlive.com/resizer/Son2sQng0Sa6G1SxCPWZerY6cIg=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VP6UDBKIFBFDNFXGUJ2L62Q7DQ.jpeg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://www.dsogaming.com/wp-content/uploads/2020/01/residentevil3remake.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://i.ytimg.com/vi/U9Ot4qQyMFE/maxresdefault.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://preview.redd.it/even-during-the-beginning-of-the-apocalypse-v0-wmlv5bdw0dbc1.jpeg?auto=webp&s=06b8ed7fbbc648baaa068a9a4b79c221f9a47bc4" className='img-fluid home_img_zoom' /></a>
                            <a data-bs-toggle="modal" data-bs-target="#exampleModalmovie"><img width="48%" src="https://ahgasewatchtv.com/wp-content/uploads/2021/12/Used-Good-Drama-poster-2021.png" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Movies_Trailer_Slider;