import { useState } from 'react';
import '../home_netflix_css/trailer_slider.css';
import '../slider_header_css/slider_header.css';
const User_Profile = () => {
    const [num, setnum] = useState(0);

    const accouthandler = () => {
        setnum(1);
        document.getElementById('link1').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const savedhandler = () => {
        setnum(2);
        document.getElementById('link2').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const notificationhandler = () => {
        setnum(3);
        document.getElementById('link3').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const downloadhandler = () => {
        setnum(4);
        document.getElementById('link4').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const qualityhandler = () => {
        setnum(5);
        document.getElementById('link5').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const membershiphandla = () => {
        setnum(6);
        document.getElementById('link6').style.color = "dodgerblue";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const helphandler = () => {
        setnum(7);
        document.getElementById('link7').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link8').style.color = "white";

    }
    const aboutprofilehandler = () => {
        setnum(8);
        document.getElementById('link8').style.color = "dodgerblue";
        document.getElementById('link6').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('link4').style.color = "white";
        document.getElementById('link5').style.color = "white";
        document.getElementById('link7').style.color = "white";
        document.getElementById('link1').style.color = "white";

    }

    return (
        <>
            <div className="container-fluid p-0 mx-0 position-relative">
                <div className='d-flex flex-row '>
                    <div class="d-flex flex-column flex-shrink-0 p-2 bg-black text-white border-end profile_width position-fixed" >
                        <a className='d-flex'>
                            <img src="/web/logo_header.png" className="mx-auto w-50" alt="" />
                        </a>
                        <hr />
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item ofcanvas_margin">
                                <a onClick={accouthandler} class="ofcanvas_color" id='link1'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                                    Accounts Center
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={savedhandler} class=" ofcanvas_colors " id='link2'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                                    Saved
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={notificationhandler} class="  ofcanvas_colors " id='link3'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                                    Notifications
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={downloadhandler} class="  ofcanvas_colors " id='link4'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
                                    Download
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={qualityhandler} class="  ofcanvas_colors " id='link5'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                                    Video Quality
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={membershiphandla} class="  ofcanvas_colors " id='link6'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                                    Membership
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={helphandler} class="  ofcanvas_colors" id='link7'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                                    Help
                                </a>
                            </li>
                            <li className='ofcanvas_margin'>
                                <a onClick={aboutprofilehandler} class="  ofcanvas_colors " id='link8'>
                                    {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                                    About
                                </a>
                            </li>
                        </ul>
                        <hr className='' />
                        <a class="d-flex align-items-center text-white text-decoration-none">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                            <strong>Logout</strong>
                        </a>
                    </div>




                    {num !== 2 && num !== 3 && num !== 4 && num !== 5 && num !== 6 && num !== 7 && num !== 8 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                                        <img src="https://github.com/mdo.png" alt="" width="100" height="100" class="rounded-circle me-2" />
                                        <h3 class="display-4 fw-normal text-white">Mohd Farheed</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">
                                    <input type="text" value={'farheed123@gamil.com'} className='input_users' />
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">
                                    <input type="text" value={'8000900100'} className='input_users' />
                                </div>
                            </div>
                        </div>
                    }




                    {num === 2 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
                                        <h3>No Result</h3>
                                        <p>You have not save any videos.</p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                            </div>
                        </div>
                    }

                    {num === 3 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                <div class="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
                                        <h3>No Notification here</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                            </div>
                        </div>
                    }

                    {num === 4 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                <div class="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
                                        <h3>You have not download any videos</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                            </div>
                        </div>
                    }


                    {num === 5 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
                                        <h3>Its not available</h3>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mx-auto">

                                </div>
                            </div>
                        </div>
                    }


                    {/* membership */}
                    {num === 6 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                                        <h1 class="display-4 fw-normal text-white">Membership</h1>
                                        <p class="fs-5 text-white text-opacity-75">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-md-6 col-sm-12 mx-auto">
                                    <div class="card mb-4 rounded-3 shadow-sm">
                                        <div class="card-header py-3">
                                            <h4 class="my-0 fw-normal">Free</h4>
                                        </div>
                                        <div class="card-body">
                                            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li>1 Users Sharing</li>
                                                <li>Email support</li>
                                                <li>Help center access</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-dark">Active Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-md-6 col-sm-12 mx-auto">
                                    <div class="card mb-4 rounded-3 shadow-sm">
                                        <div class="card-header py-3">
                                            <h4 class="my-0 fw-normal">Normal</h4>
                                        </div>
                                        <div class="card-body">
                                            <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li>20 users included</li>
                                                <li>Priority email support</li>
                                                <li>Help center access</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-dark">Active Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-md-6 col-sm-12 mx-auto">
                                    <div class="card mb-4 rounded-3">
                                        <div class="card-header py-3">
                                            <h4 class="my-0 fw-normal">Pro</h4>
                                        </div>
                                        <div class="card-body">
                                            <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                                            <ul class="list-unstyled mt-3 mb-4">
                                                <li>3 Users Sharing</li>
                                                <li>Phone and email support</li>
                                                <li>Help center access</li>
                                            </ul>
                                            <button type="button" class="w-100 btn btn-dark">Active Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {num === 7 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                                        <h4 className='text-white'>Help Center</h4>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                                    <p className='text-white text-opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non itaque voluptate consequuntur obcaecati. Repellendus, saepe nobis? Vitae, omnis. Distinctio inventore animi nam eveniet, nihil a quasi adipisci ea itaque labore tempora earum necessitatibus, nostrum, ullam aliquam repellendus temporibus pariatur fuga! Suscipit provident alias iusto facere, deserunt iste nam cum impedit sed aliquid incidunt quasi blanditiis praesentium. Nisi corporis alias autem accusantium natus iusto, aut aperiam porro suscipit quibusdam ducimus in ipsum magnam! Tenetur exercitationem labore aliquid commodi corporis iure in eum quibusdam earum? Laborum provident neque dolor esse nesciunt autem perspiciatis odio aliquam, veritatis numquam quaerat facere voluptatem ullam?</p>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                                    <p className='text-white text-opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis minima quaerat est deserunt nemo explicabo, excepturi aliquid voluptas culpa quo aperiam voluptatibus sed adipisci error vitae suscipit cupiditate! Dolor veritatis neque ad dolores suscipit deleniti at ratione harum odit nesciunt ullam nobis porro autem quisquam architecto ipsa dolorem quo cumque sequi, sint ex asperiores reiciendis. Iusto veniam optio quasi quia aspernatur dolorem ducimus quas recusandae repellendus animi laborum eaque vel ad consectetur alias cupiditate, et nobis odio iure, nulla nostrum! Animi tenetur enim ipsum placeat a nulla sunt pariatur vero sequi in. Dolores minima, alias amet numquam sint ipsam.</p>
                                </div>
                            </div>
                        </div>
                    }


                    {num === 8 &&
                        <div className="container mt-5 position-absolute end-0  profile_second_container">
                            <div class="row p-0 text-center" data-bs-target="#navbar-example3" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
                                <div className="col-12">
                                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                                        <h4 className='text-white'>About Center</h4>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                                    <p className='text-white text-opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non itaque voluptate consequuntur obcaecati. Repellendus, saepe nobis? Vitae, omnis. Distinctio inventore animi nam eveniet, nihil a quasi adipisci ea itaque labore tempora earum necessitatibus, nostrum, ullam aliquam repellendus temporibus pariatur fuga! Suscipit provident alias iusto facere, deserunt iste nam cum impedit sed aliquid incidunt quasi blanditiis praesentium. Nisi corporis alias autem accusantium natus iusto, aut aperiam porro suscipit quibusdam ducimus in ipsum magnam! Tenetur exercitationem labore aliquid commodi corporis iure in eum quibusdam earum? Laborum provident neque dolor esse nesciunt autem perspiciatis odio aliquam, veritatis numquam quaerat facere voluptatem ullam?</p>
                                </div>
                                <div class="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                                    <p className='text-white text-opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis minima quaerat est deserunt nemo explicabo, excepturi aliquid voluptas culpa quo aperiam voluptatibus sed adipisci error vitae suscipit cupiditate! Dolor veritatis neque ad dolores suscipit deleniti at ratione harum odit nesciunt ullam nobis porro autem quisquam architecto ipsa dolorem quo cumque sequi, sint ex asperiores reiciendis. Iusto veniam optio quasi quia aspernatur dolorem ducimus quas recusandae repellendus animi laborum eaque vel ad consectetur alias cupiditate, et nobis odio iure, nulla nostrum! Animi tenetur enim ipsum placeat a nulla sunt pariatur vero sequi in. Dolores minima, alias amet numquam sint ipsam.</p>
                                </div>
                            </div>
                        </div>
                    }





                </div>
            </div>



        </>
    )
}
export default User_Profile;