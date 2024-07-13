import { useNavigate } from 'react-router';
import '../all_header_items_css/all_items.css';
const All_Web_Series = () => {
    const navigate=useNavigate();
    return (
        <>
            <div class="container-fluid">
                <img src="https://web.static.nowtv.com/images/NOWTV_2023/Design_assets/ENTERTAINMENT/Megawall/Existing/Sep/ECHP_Ents_Desktop-6-sept-@x3.jpg?downsize=1200:*&output-format=webp&output-quality=70" className="img-fluid top_web_img" alt="" />
                <div class="row row-cols-2 mt-4 mb-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
                    <div class="col">
                        <a onClick={()=>{navigate('/Stranger_Things')}} ><img src="https://i.imgur.com/1NeKRpO.jpeg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Money_Hiest')}} ><img src="https://image.tmdb.org/t/p/original/aALVICvOTw239032nO8YhNmHvcQ.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Squid_Game')}} ><img src="https://geekculture.co/wp-content/uploads/2021/09/squid-game.jpeg" alt="" className="img-fluid all_web_img" /></a>
                    </div>

                    <div class="col">
                        <a onClick={()=>{navigate('/Alice_In_Borderland')}} ><img src="https://image.tmdb.org/t/p/original/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Sex_Education')}} ><img src="https://poltronanerd.com.br/wp-content/uploads/2019/01/poltrona-Sex-education-poster.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/13_Reasons_Why')}} ><img src="https://images6.fanpop.com/image/photos/40500000/13-Reasons-Why-Poster-13-reasons-why-netflix-series-40517422-426-597.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>

                    <div class="col">
                        <a onClick={()=>{navigate('/Dark')}} ><img src="https://i.redd.it/b7ux95rczt551.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a   onClick={()=>{navigate('/The_Witcher')}} ><img src="https://deadentertainment.com/uploads/the-witcher-netflix-new-poster-key-art-01-i28y29t2m4.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a   onClick={()=>{navigate('/Vikings_Valhalla')}} ><img src="https://image.tmdb.org/t/p/original/rDFy1fUU6OC3Mm0CLFB7u0fGwVN.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Cobra_kai')}} ><img src="https://www.gamingwap.com/wp-content/uploads/2023/05/ezgif-4-e6661abca4.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Never_Have_I_Ever')}} ><img src="https://image.tmdb.org/t/p/original/adv5dfJbeHE4s0E466B2KDWLDfo.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a   onClick={()=>{navigate('/Wednesday')}} ><img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Wednesday-Official-Poster.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>

                    <div class="col">
                        <a   onClick={()=>{navigate('/All_Of_Us_Are_Dead')}} ><img src="https://www.wheninmanila.com/wp-content/uploads/2022/01/All-of-Us-are-Dead-poster-1-e1642405723796.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a   onClick={()=>{navigate('/Hellbound')}} ><img src="https://thekmeal.com/wp-content/uploads/2021/11/hellbound.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Sweet_Tooth')}} ><img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/sweet-tooth-poster.jpg" alt=" " className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Sendman')}} ><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a778fb145463995.629f103f7c39d.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Heeramandi')}} ><img src="https://m.media-amazon.com/images/M/MV5BMzFmMGM3ZWEtYTg4Ni00NGRjLThlY2MtNGNlY2U3MjBlYzgxXkEyXkFqcGdeQXVyMTU5OTAwMjU4._V1_FMjpg_UX1000_.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                    <div class="col">
                        <a onClick={()=>{navigate('/Shadow_And_Bone')}} ><img src="https://assets.gadgets360cdn.com/pricee/assets/product/202209/Shadow_and_Bone__1664358701.jpg" alt="" className="img-fluid all_web_img" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default All_Web_Series;