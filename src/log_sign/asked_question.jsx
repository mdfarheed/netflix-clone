import '../log_sign_css/video_heading.css';
const Asked_Question = () => {
    return (
        <>
            <div className="container mt-5">
            <h1 className="display-5 fw-bold text-center text-white mb-4">Frequently Asked Questions</h1>
                <div class="accordion accordion-flush mx-4" id="accordionFlushExample">
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>What is Netflix?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>How much does Netflix cost?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>Where can I watch?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>How do I cancel?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>What can I watch on Netflix?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark bg-opacity-75 text-white border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed bg-dark text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne7" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h3>Is Netflix good for kids?</h3>
                            </button>
                        </h2>
                        <div id="flush-collapseOne7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5 ">
                <h5 className='text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form class="row">
                            <div className='col-12 col-sm-9 col-md-8 col-lg-8 ps-1'>
                            <input class="form-control mt-3 shadow-none bg-black text-white bg-opacity-75 border w-75 ms-auto py-3 login_input" type="email" placeholder="Email address" aria-label="Large" />
                            </div>
                            <div className='col-12 col-sm-3 col-md-4 col-lg-4 p-0 main_div_login_btn'> 
                            <button class=" btn login_btn py-3 mt-3" type="submit">Get Start
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right ms-2 mb-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            </button>
                            </div>
                        </form>
                    </div>
            </div>
            <hr className="hr_line mt-0 pt-0 mb-0" />
        </>
    )
}
export default Asked_Question;