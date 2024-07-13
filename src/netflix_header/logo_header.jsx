import { useNavigate } from 'react-router';
import '../slider_header_css/slider_header.css';
const Logo_Header = () => {
    const navigate=useNavigate();
    return(
        <>

            <nav class="navbar fixed-top main_logo_header">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src="/web/logo_header.png" className="logo_netflix_header" alt="" /></a>
                    <form class="d-flex mx-auto" role="search">
                        <input class="form-control me-2 text-white input_box shadow-none bg-black bg-opacity-75" type="search" placeholder='Search' />
                        <button className="btn search_btn" type="submit">Search</button>
                    </form>
                     
          <a onClick={()=>{navigate('/profile')}} class="d-block ">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
                </div>
            </nav>
        </>
    )
}
export default Logo_Header;