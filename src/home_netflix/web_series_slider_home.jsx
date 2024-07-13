import React from 'react'
import Carousel from 'react-grid-carousel';
import '../home_netflix_css/movies_name_text.css';
 import { useNavigate } from 'react-router';
const Web_Series_Slider_Home = () => {
  const navigate=useNavigate();
  return (
    <>
      {/* <Carousel
  cols={4}
  rows={1}
  gap={11}
  responsiveLayout={[
    {
      breakpoint: 1200,
      cols: 3
    },
    {
      breakpoint: 990,
      cols: 2
    }
  ]}
  mobileBreakpoint={670}
  arrowRight={<ArrowBtn type="right" />}
  arrowLeft={<ArrowBtn type="left" />}
>
  {[...Array(8)].map((_, i) => (
    <Carousel.Item key={i}>
      <Card>
        <Img img={`https://picsum.photos/200/160?random=${i}`} />
      </Card>
    </Carousel.Item>
  ))}
</Carousel> */}
      <div className="container-fluid mt-4">
        <div className="our-movie pb-2 text-white">
          <h5 className="multi_slider_text">Our Web Series</h5>
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
              <a onClick={()=>{navigate('/Stranger_Things')}} ><img width="48%" src="/web/stranger.jpg" className='img-fluid position-absolute top-0 start-0   img_size home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Money_Hiest')}}><img width="48%" src="/web/money.jpg" className='img-fluid position-absolute top-0 start-50 me-1  img_size home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Squid_Game')}}><img width="48%" src="/web/squid.webp" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Alice_In_Borderland')}}><img width="48%" src="/web/alice.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Sex_Education')}}><img width="48%" src="/web/sex_education.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/13_Reasons_Why')}}><img width="48%" src="/web/13_reasons.webp" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Dark')}}><img width="48%" src="/web/dark.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/The_Witcher')}}><img width="48%" src="/web/the_witcher.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Vikings_Valhalla')}}><img width="48%" src="/web/vikings_v.webp" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Cobra_kai')}}><img width="48%" src="/web/cobra_kai.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Never_Have_I_Ever')}}><img width="48%" src="/web/never_have_i_ever.png" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Wednesday')}}><img width="48%" src="https://knightedgemedia.com/wp-content/uploads/2022/06/wednesday-addams-teaser-trailer.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/All_Of_Us_Are_Dead')}}><img width="48%" src="/web/all_of_us_are_dead.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Hellbound')}}><img width="48%" src="/web/hellbound.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Sweet_Tooth')}}><img width="48%" src="/web/sweet_tooth.jpg" className='img-fluid position-absolute top-0 start-0 home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Sendman')}}><img width="48%" src="/web/sandman.jpg" className='img-fluid position-absolute top-0 start-50 me-1 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='position-relative'>
              <a onClick={()=>{navigate('/Heeramandi')}}><img width="48%" src="https://lehren.com/wp-content/uploads/2023/02/sanjay-leela-bhansalis-heeramandi-1068x601.jpg" className='img-fluid home_img_zoom' /></a>
              <a onClick={()=>{navigate('/Shadow_And_Bone')}}><img width="48%" src="/web/shadow_and_bone.jpg" className='img-fluid position-absolute top-0 start-50 home_img_zoom' /></a>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
export default Web_Series_Slider_Home;