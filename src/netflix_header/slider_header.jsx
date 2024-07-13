import Carousel from 'react-grid-carousel';
import { useNavigate } from 'react-router';
import '../slider_header_css/slider_header.css';
const Slider_Header=()=>{
    const navigate=useNavigate();
    return(
        <>


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content model_color ">
      <div class="modal-header">
        <img src="/web/logo_header.png" className="logo_netflix_header" alt="" />
        <button type="button" class="btn-close modal_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Sorry Its Not Available.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


         <div className="container-fluid  main_container_slider_header">
        <Carousel cols={5}
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
              <a onClick={()=>{navigate('/All_Web_Series')}} className='position-absolute top-0 start-0 btn btn-sm  linK_width'>Web Series</a>
              <a onClick={()=>{navigate('/All_Movies')}} className='position-absolute top-0 start-50 btn btn-sm  linK_width'>Movies</a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/All_Tranding')}} className='position-absolute top-0 start-0 btn btn-sm   linK_width'>Tranding</a>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='position-absolute top-0 start-50 btn btn-sm   linK_width'>Live</a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal"className='position-absolute top-0 start-0 btn btn-sm   linK_width'>Tv Shows</a>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='position-absolute top-0 start-50 btn btn-sm   linK_width'>Sporst</a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='position-absolute top-0 start-0 btn btn-sm   linK_width'>Kids</a>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='position-absolute top-0 start-50 btn btn-sm   linK_width'>News</a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-sm   linK_width'>Trailer</a>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" className='position-absolute top-0 start-50 btn btn-sm linK_width'>Upcoming</a>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
        </>
    )
}
export default Slider_Header;