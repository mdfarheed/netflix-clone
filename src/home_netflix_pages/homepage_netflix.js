import Movies_Slider_Home from "../home_netflix/movies_slider_home";
import Movies_Trailer_Slider from "../home_netflix/movies_trailer_slider";
import Second_Home_Slider from "../home_netflix/second_home_slider";
import Trailer_Slider from "../home_netflix/trailer_slider";
import Tranding_Slider_Home from "../home_netflix/tranding_slider_home";
import Web_Series_Slider_Home from "../home_netflix/web_series_slider_home";
import Web_Trailer_Slider from "../home_netflix/web_trailer_slider";
import Logo_Header from "../netflix_header/logo_header";
import Slider_Header from "../netflix_header/slider_header";

const Homepage_Netflix=()=>{
    return(
        <>
        {<Logo_Header/>}
        {<Slider_Header/>}
        {<Trailer_Slider/>}
        {<Web_Series_Slider_Home/>}
        {<Movies_Slider_Home/>}
        {<Tranding_Slider_Home/>}
        {<Second_Home_Slider/>}
        {<Web_Trailer_Slider/>}
        {<Movies_Trailer_Slider/>}
 
        </>
    )
}
export default Homepage_Netflix;