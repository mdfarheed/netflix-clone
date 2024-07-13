import '../log_sign_css/video_heading.css';
const Video_Heading = () => {
    return (
        <>
            <hr className="hr_line mt-0 pt-0" />
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 m-auto  text-start text-white">
                        <h1 className='log_video_h1_1 display-4 fw-bold'>Enjoy on your TV</h1>
                        <p className='log_video_p_1'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="col-12 col-lg-7 col-md-7 col-sm-12 mb-4 me-auto">
                        <div class="ratio ratio-16x9">
                            <video autoPlay loop muted >
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr_line mt-0 pt-0 mb-0" />


            <div className="container-fluid my-5">
                <div className="row">
                <div className="col-12 col-lg-5 col-md-6 col-sm-12 mb-4 ms-auto mt-4">
                    <div class="ratio ratio-16x9">
                            <video autoPlay loop muted >
                                <source src="/videos/video2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                        <div className="col-12 col-lg-5 col-md-5 col-sm-12 m-auto  text-start text-white">
                        <h1 className='log_video_h1_1 display-4 fw-bold'>Download your shows to watch offline</h1>
                        <p className='log_video_p_1'>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
            <hr className="hr_line mt-0 pt-0 mb-0" />



            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 m-auto  text-start text-white">
                        <h1 className='log_video_h1_1 display-4 fw-bold'>Watch everywhere</h1>
                        <p className='log_video_p_1'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="col-12 col-lg-7 col-md-7 col-sm-12 ms-auto">
                        <div class="ratio ratio-16x9">
                            <video autoPlay loop muted >
                                <source src="/videos/video3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr_line mt-0 pt-0 mb-0" />


            <div className="container-fluid my-5">
                <div className="row">
                <div className="col-12 col-lg-5 col-md-6 col-sm-12 mb-4 ms-auto mt-4">
                    <div class="ratio ratio-16x9">
                           <img src="/videos/video4.png" alt="" />
                        </div>
                    </div>
                        <div className="col-12 col-lg-5 col-md-5 col-sm-12 m-auto  text-start text-white">
                        <h1 className='log_video_h1_1 display-4 fw-bold'>Create profiles for kids</h1>
                        <p className='log_video_p_1'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
            <hr className="hr_line mt-0 pt-0 mb-0" />
        </>
    )
}
export default Video_Heading;