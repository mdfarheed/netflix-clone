import { useNavigate } from 'react-router';
import '../log_sign_css/log_sign.css';
const Log_Sign = () => {
  const navigate=useNavigate();
  return (
    <>


      {/* <!--sing in Modal --> */}
      <div class="modal fade bg-dark bg-opacity-25" id="singModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="singModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content rounded-4 bg-black bg-opacity-75">
            <div class="modal-header border-dark">
              <h1 class=" mb-0 fs-3 ps-5 text-white">SignIn</h1>
              <button type="button" class="btn-close bg-white shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body p-5 pt-0 mt-4">
              <form class="">

                <div class="form-floating mb-3">
                  <input type="email" class=" w-100 p-2 py-3 shadow-none bg-black text-white bg-opacity-75 border outline_remove" id="floatingInput" placeholder="Email or mobile number" />
                </div>

                <div class="form-floating mb-3">
                  <input type="password" class=" w-100 p-2 py-3 shadow-none bg-black text-white bg-opacity-75 border outline_remove" id="floatingPassword" placeholder="Password" />
                </div>
                <button class="w-100 mb-3 mt-2 btn rounded btn btn_color_modal" type="submit">Sign In</button>
                <h6 class=" text-white text-center">OR</h6>
                <button class="w-100 mb-3 btn btn-dark rounded" type="submit">
                  Use a sign-in code
                </button>
                <a href="#" className='nav-link text-white text-center mb-3 hover_underline'>Forgot Password?</a>
                <div class="form-check mb-3">
                  <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label text-white" for="flexCheckDefault">
                    Remmber Me
                  </label>
                </div>
                <div className="text-white d-flex text-opacity-75 mb-3">New to Netflix?<a href="#" className='nav-link text-white hover_underline'>Sign up now.</a></div>
                <div className='sing_paragraph d-inline'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className=' hover_underline'>Learn more.</a></div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="bg_img">
        <nav class="navbar">
          <div class="container mt-2">
            <a class="navbar-brand ms-1"><img src="/web/logo_header.png" className="logo_netflix_login_singin" alt="" /></a>
            <form class="d-flex me-1  main_div_two_btn" role="search">
              <div class="dropdown me-4">
                <button class="btn btn-sm dropdown-toggle bg-black text-white bg-opacity-50 border px-3 py-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate me-2" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                  </svg>
                  English
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">English</a></li>
                  <li><a class="dropdown-item" href="#">Hindi</a></li>
                </ul>
              </div>
              <button type='button' class="btn btn-sm btn_bg_color_login px-3" data-bs-toggle="modal" data-bs-target="#singModal" >Sign in</button>
            </form>
          </div>
        </nav>
        <div className="container">
          <div className='text-white text-center margin_text'>
            <h1 className='fw-bold text-white heading1 display-4'>Unlimited movies, TV shows and more</h1>
            <h5 className='text-white heading4 mt-3'>Watch anywhere. Cancel anytime.</h5>
            <h5 className='text-white heading4 mt-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
          </div>

          <form class="row">
            <div className='col-12 col-sm-9 col-md-8 col-lg-8 ps-1'>
              <input class="form-control mt-3 shadow-none bg-black text-white bg-opacity-75 border w-75 ms-auto py-3 login_input" type="email" placeholder="Email address" aria-label="Large" />
            </div>
            <div className='col-12 col-sm-3 col-md-4 col-lg-4 p-0 main_div_login_btn'>
              <button onClick={()=>{navigate('/Home')}} class=" btn login_btn py-3 mt-3" type="submit">Get Start
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right ms-2 mb-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
export default Log_Sign;