import { useEffect, useState, useRef } from 'react';
import '../web_series_paylist_css/stranger_thing_web_playlist.css';
import Carousel from 'react-grid-carousel';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
const Mother_Of_The_Bride = () => {
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
            {/* movie player */}
            <div class="ratio ratio-16x9">
                <iframe width="718" height="404" src="https://www.youtube.com/embed/yjmDBKyemUw?list=PLTDtftZ-0UWdVqYGq4yAqbOFRNEBO-rIO" title="Stranger Things | The First 8 Minutes - Series Opener [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


            {/* Movie name, like button, comment , playlist, download */}
            <div className="container-fluid mt-2">

                <h5 class="text-white mb-3">Mother Of The Bride</h5>

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
                <a href="" className='comment_link ps-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg pb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                    <span>Playlist</span>
                </a>
                <a href="" className='comment_link ps-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download pb-1" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                    <span className='ps-1'>download</span>
                </a>
            </div>
            <hr className='text-white' />


            {/* Movie cast name and images*/}
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

                                <img src="https://i.pinimg.com/736x/3d/09/38/3d0938c52df2e5f1e4e32ee29594def8.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-center text-white">Kento Yamazaki</p>
                                </div>
                            </div>

                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://i.mydramalist.com/xn65z_5c.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Tao Tsuchiya</p>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card position-absolute top-0 start-0 card_width_cast">
                                <img src="https://i.pinimg.com/736x/16/4f/a7/164fa7fa28563dbe9be4c5f3224ae579.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Nijirō Murakami</p>
                                </div>
                            </div>

                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://i.redd.it/b5ygd9zaskv81.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Ayaka Miyoshi</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card position-absolute top-0 start-0 card_width_cast">
                                <img src="https://i.pinimg.com/originals/df/4d/1d/df4d1d706ed2a49c4db32d5a04545a81.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Dori Sakurada</p>
                                </div>
                            </div>
                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://city.living.jp/newsimages/2014/4/img659c06653bdd7745ae4a52f54c2781e7c2.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center ">Yuri Tsunematsu</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card card_width_cast">
                                <img src="https://i.mydramalist.com/QJ81b5_5_c.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Hayato Isomura</p>
                                </div>
                            </div>
                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://ilarge.lisimg.com/image/14105575/740full-azusa-watanabe.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Aimi Satsukawa</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='position-relative'>
                            <div class="card position-absolute top-0 start-0 card_width_cast">
                                <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/528467_v9_aa.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Kai Inowaki</p>
                                </div>
                            </div>
                            <div class="card position-absolute top-0 start-50 card_width_cast">
                                <img src="https://i.mydramalist.com/Xd23wd_5c.jpg" class="card-img-top mx-auto rounded-circle" alt="..." />
                                <div class="card-body">
                                    <p class="card-text text-white text-center">Maikuma Katsuya</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>


            <hr className='text-white' />
            {/* web series trailer */}
            <div className="container-fluid">
                <h5 className='ms-3 text-white'>Trailers:</h5>
                <div className="row">
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


            {/* comment section  */}
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
export default Mother_Of_The_Bride;