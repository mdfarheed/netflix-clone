import { useEffect, useState, useRef } from 'react';
import '../web_series_paylist_css/stranger_thing_web_playlist.css';
import Carousel from 'react-grid-carousel';
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
const Wednesday = () => {

    const [count1, setcount1] = useState(0);
    const [likes, setLikes] = useState(100);
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // like button count number and change color
    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
            document.getElementById('like_btn').style.color = "white";

        } else {
            setLikes(likes + 1);
            document.getElementById('like_btn').style.color = "red";

        }
        setIsClicked(!isClicked);
    }


    //   click and change video and text color of episode
    const handlecount1 = () => {
        setcount1(1);
        document.getElementById('ep1').style.color = "dodgerblue";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount2 = () => {
        setcount1(2);
        document.getElementById('ep2').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount3 = () => {
        setcount1(3);
        document.getElementById('ep3').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount4 = () => {
        setcount1(4);
        document.getElementById('ep4').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount5 = () => {
        setcount1(5);
        document.getElementById('ep5').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount6 = () => {
        setcount1(6);
        document.getElementById('ep6').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount7 = () => {

        setcount1(7);
        document.getElementById('ep7').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep2').style.color = "white";
        document.getElementById('ep8').style.color = "white";
    }
    const handlecount8 = () => {
        setcount1(8);
        document.getElementById('ep8').style.color = "dodgerblue";
        document.getElementById('ep1').style.color = "white";
        document.getElementById('ep3').style.color = "white";
        document.getElementById('ep4').style.color = "white";
        document.getElementById('ep5').style.color = "white";
        document.getElementById('ep6').style.color = "white";
        document.getElementById('ep7').style.color = "white";
        document.getElementById('ep2').style.color = "white";
    }




    //  comment query section
    const [data] = useState([
        {
            userId: '01a',
            comId: '012',
            fullName: 'Riya Negi',
            avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
            userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'Hey, Loved your blog! ',
            replies: [
                {
                    userId: '02a',
                    comId: '013',
                    userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    fullName: 'Adam Scott',
                    avatarUrl: 'https://ui-avatars.com/api/name=Adam&background=random',
                    text: 'Thanks! It took me 1 month to finish this project but Iam glad it helped out someone!🥰'
                }
            ]
        }
    ])

    //  comment traget
    const ref = useRef(null);

    const handlecommentClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>


            {/*season 1 Episodes 1 to 8 */}

            {count1 != 2 && count1 != 3 && count1 != 4 && count1 != 5 && count1 != 6 && count1 != 7 && count1 != 8 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 2 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="901" height="380" src="https://www.youtube.com/embed/1-tc2YlCqCk?list=TLPQMTIwNTIwMjTYjV3DC247RQ" title="THE SPIDER | Horror Spider-Man Fan Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 3 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 4 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/EzaUTlqQJ9A" title="Eleven Makeover Scene | Stranger Things | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                    </div>
                </>
            }
            {count1 == 5 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 6 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/lwloEijXRA8" title="Stranger Things - &quot;Eleven Escape from Hawkins lab&quot;. Stranger Things season 01 episode 03." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 7 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/EzaUTlqQJ9A" title="Eleven Makeover Scene | Stranger Things | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 8 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }
            {count1 == 9 &&
                <>
                    <div class="ratio ratio-16x9">
                        <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </>
            }

            {/* web series name, like,comment,playlist and download links */}
            <div className="container-fluid mt-2">
                {count1 == 0 &&
                    <h5 class="text-white mb-3"> Wednesday | Season 1 | Episode 1</h5>
                }
                {count1 >= 1 &&
                    <h5 class="text-white mb-3"> Wednesday | Season 1 | Episode {count1}</h5>
                 }
                <a className={`like-button ${isClicked && 'liked'}`} id='like_btn_c' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" id='like_btn' class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                </a>
                <span className="likes-counter text-white ps-2">{`${likes}`}</span>
                <a onClick={handlecommentClick} className='comment_link ps-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat pb-1" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                    </svg>
                    <span className='ps-1'>Comment</span>
                </a>
                <a  className='comment_link ps-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg pb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                    <span>Playlist</span>
                </a>
                <a  className='comment_link ps-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download pb-1" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                    <span className='ps-1'>download</span>
                </a>
            </div>
            <hr className='text-white' />


            {/* seasons list  */}
            <div className='season_button_box mt-2' >
                <a className="season_buttons" id='s1'>Season 1</a>
            </div>


            {/*season 1 multi episode slider */}
            <>
                <div className="container-fluid mt-3">
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

                                <div class="card position-absolute top-0 start-0 card_width">

                                    <a onClick={handlecount1}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text_1" id='ep1'>Episode 1</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="card position-absolute top-0 start-50 card_width">
                                    <a onClick={handlecount2}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text" id='ep2'>Episode 2</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='position-relative'>
                                <div class="card position-absolute top-0 start-0 card_width">
                                    <a onClick={handlecount3}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text" id='ep3'>Episode 3</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="card position-absolute top-0 start-50 card_width">
                                    <a onClick={handlecount4}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text" id='ep4'>Episode 4</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='position-relative'>
                                <div class="card position-absolute top-0 start-0 card_width">
                                    <a onClick={handlecount5}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text " id='ep5'>Episode 5</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="card position-absolute top-0 start-50 card_width">
                                    <a onClick={handlecount6}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text" id='ep6'>Episode 6</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='position-relative'>
                                <div class="card card_width">
                                    <a onClick={handlecount7}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text text-center episode_slider_text" id='ep7'>Episode 7</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="card position-absolute top-0 start-50 card_width">
                                    <a onClick={handlecount8}><img width="48%" src="https://www.small-screen.co.uk/wp-content/uploads/2023/01/wednesday-season-2-renewed-by-netflix-1050x591.jpg" class="card-img-top rounded img_zoom" alt="..." />
                                        <div class="card-body decoration-remove">
                                            <p class="card-text text-center episode_slider_text" id='ep8'>Episode 8</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>
            <hr className='text-white' />


            {/* web series trailer */}
            <div className="container-fluid">
                <h5 className='ms-3 text-white'>Trailers:</h5>
                <div className="row justify-content-center">
                    <div class="card col-5 col-md-5 col-lg-5 col-sm-5 col-xl-5 ms-3 rounded text-white bg-card-trailer border-none">
                        <div class="ratio ratio-4x3">
                            <iframe width="718" height="404" src="https://www.youtube.com/embed/b9EkMc79ZSU" title="Stranger Things | Official Final Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="card-body border-none">
                            <h6>Season 1 Trailer:</h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='text-white' />


            {/* web series cast */}
            <h5 className='ms-3 text-white'>Cast:</h5>
            <div className="container-fluid mt-3 mb-3">
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
                        <div className='position-relative '>

                            <div class="card position-absolute top-0 start-0 card_width_cast">

                                <img src="https://celebmafia.com/wp-content/uploads/2022/02/jenna-ortega-02-08-2022-3.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-center text-white">Jenna Ortega</p>
                                </div>
                            </div>

                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/wednesday-cast-emma-myers-enid-sinclair-1662754241.png?crop=0.946xw:0.639xh;0,0.0517xh&resize=980:*" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Emma Myers</p>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card position-absolute top-0 start-0 card_width_cast">
                                <img src="https://bioagewho.co/wp-content/uploads/2021/02/1613408977_Hunter-Doohan-Bio-Wiki-Net-Worth-Age-Birthday-Gay-Boyfriend-Fiance-Family-Height-Actor-461x381.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Hunter Doohan</p>
                                </div>
                            </div>

                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://static.showit.co/1200/cWuQ9T3IRQGgxw6WwagnrA/89523/headshots_2023_-5.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Joy Sunday</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card position-absolute top-0 start-0 card_width_cast">
                                <img src="https://i.pinimg.com/originals/d3/8f/b0/d38fb06cdc7f1f418e57d83426150c0f.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Georgie Farmer</p>
                                </div>
                            </div>
                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://www.indiewire.com/wp-content/uploads/2019/01/shutterstock_10053106d.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center ">Christina Ricci</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card card_width_cast">
                                <img src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/uploads/images/Khaled%20Barakeh.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Victor Dorobantu</p>
                                </div>
                            </div>
                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://celebfanmailaddress.com/wp-content/uploads/2023/05/riki-twiktter.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Riki Lindhome</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>

            <hr className='comment_target' ref={ref} />
            <CommentSection
                currentUser={{
                    currentUserId: '01a',
                    currentUserImg:
                        'https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg',
                    currentUserProfile:
                        'https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg',
                    currentUserFullName: 'Riya Negi'
                }}
                logIn={{
                    loginLink: 'http://localhost:3001/',
                    signupLink: 'http://localhost:3001/'
                }}
                hrStyle={{ border: '0.5px solid white' }}
                titleStyle={{ color: '#f2f2f2' }}
                // commentsCount={8}
                commentData={data}
                imgStyle={{ borderRadius: '50%' }}
                customImg='https://mir-s3-cdn-cf.behance.net/user/276/f4503851443203.5b87b230864b1.jpg'
                inputStyle={{ border: '1px solid black' }}
                formStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.795)', }}
                submitBtnStyle={{ border: '1px solid black', backgroundColor: 'black' }}
                cancelBtnStyle={{
                    border: '1px solid gray',
                    backgroundColor: 'gray',
                    color: 'white'
                }}
                removeEmoji={true}
                overlayStyle={{ backgroundColor: 'black', color: 'white' }}
                replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }} />
        </>
    )
}
export default Wednesday;