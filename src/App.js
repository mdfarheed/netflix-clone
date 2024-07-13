import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage_Netflix from "./home_netflix_pages/homepage_netflix";
import Stranger_Things_page from "./web_series_page/Stranger_Things_page";
import Money_Hiest_Page from "./web_series_page/money_heist_page";
import Squid_Game_Page from "./web_series_page/squid_game_page";
import Alice_In_Borderland_Page from "./web_series_page/alice_in_borderland_page";
import Sex_Education_Page from "./web_series_page/sex_education_page";
import Reasons_Why_13_page from "./web_series_page/reasons_why_13_page";
import Dark_page from "./web_series_page/dark_page";
import The_Witcher_page from "./web_series_page/the_witcher_page";
import Vikings_Valhalla_Page from "./web_series_page/vikings_valhalla_page";
import Cobra_Kai_Page from "./web_series_page/cobra_kai_page";
import Never_Have_I_Ever_Page from "./web_series_page/never_have_i_ever_Page";
import Wednesday_Page from "./web_series_page/wednesday_page";
import All_Of_Us_Are_Dead_Page from "./web_series_page/all_of_us_are_dead";
import Hellbound_Page from "./web_series_page/hellbound_page";
import Sweet_Tooth_Page from "./web_series_page/sweet_tooth_page";
import Sendman_page from "./web_series_page/sendman_page";
import Heeramandi_Page from "./web_series_page/heeramandi_page";
import Shadow_And_Bone_page from "./web_series_page/shadow_and_bone_page";
import RRR_page from "./movies_playlist_page/rrr_page";
import Avatar_Page from "./movies_playlist_page/avatar_page";
import Avenger_Infinity_War_Page from "./movies_playlist_page/avenger_infinity_war_page";
import Avenger_End_Game_Page from "./movies_playlist_page/avenger_end_game_page";
import Bahubali_Page from "./movies_playlist_page/bahubali_page";
import Da_5_Bloods_page from "./movies_playlist_page/da_5_bloods_page";
import Heart_Of_Stone_Page from "./movies_playlist_page/heart_of_stone_page";
import Jawan_Page from "./movies_playlist_page/jawan_page";
import Mariage_Story_Page from "./movies_playlist_page/mariage_story_page";
import Mario_Bros_Page from "./movies_playlist_page/marrio_bros_page";
import MoneyBall_Page from "./movies_playlist_page/moneyball_page";
import Mother_Of_The_Bride_Page from "./movies_playlist_page/mothers_of_the_bride_page";
import PK_Page from "./movies_playlist_page/pk_page";
import The_King_Page from "./movies_playlist_page/the_king_page";
import The_Power_Of_The_Dog_Page from "./movies_playlist_page/the_power_of_the_dog_page";
import The_Woman_King_Page from "./movies_playlist_page/the_woman_page";
import The_Wonder_page from "./movies_playlist_page/the_wonder_page";
import To_Leslie_Page from "./movies_playlist_page/to_leslie_page";
import All_Web_Series_page from "./all_header_items_page/all_web_series_page";
import All_Movies_Page from "./all_header_items_page/all_movies_page";
import All_Tranding_Page from "./all_header_items_page/all_tranding_page";
import Log_Sign_Page from "./log_sign_page/log_sing_page";
import User_Profile_Page from "./user_profile_page/user_profile_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* web series routing */}
          <Route path='/Home' element={<Homepage_Netflix />} />
          <Route path='/Stranger_Things' element={<Stranger_Things_page/>} />
          <Route path='/Money_Hiest' element={<Money_Hiest_Page/>} />
          <Route path='/Squid_Game' element={<Squid_Game_Page/>}/>
          <Route path='/Alice_In_Borderland' element={<Alice_In_Borderland_Page/>}/>
          <Route path='/Sex_Education' element={<Sex_Education_Page/>}/>
          <Route path='/13_Reasons_Why' element={<Reasons_Why_13_page/>}/>
          <Route path='/Dark' element={<Dark_page/>}/>
          <Route path='/The_Witcher' element={<The_Witcher_page/>}/>
          <Route path='/Vikings_Valhalla' element={<Vikings_Valhalla_Page/>}/>
          <Route path='/Cobra_kai' element={<Cobra_Kai_Page/>}/>
          <Route path='/Never_Have_I_Ever' element={<Never_Have_I_Ever_Page/>}/>
          <Route path='/Wednesday' element={<Wednesday_Page/>}/>
          <Route path='/All_Of_Us_Are_Dead' element={<All_Of_Us_Are_Dead_Page/>}/>
          <Route path='/Hellbound' element={<Hellbound_Page/>}/>
          <Route path='/Sweet_Tooth' element={<Sweet_Tooth_Page/>}/>
          <Route path='/Sendman' element={<Sendman_page/>}/>
          <Route path='/Heeramandi' element={<Heeramandi_Page/>}/>
          <Route path='/Shadow_And_Bone' element={<Shadow_And_Bone_page/>}/>


           {/* movies routing */}
          <Route path='/Avatar' element={<Avatar_Page/>}/>
          <Route path='/Avenger_End_Game' element={<Avenger_End_Game_Page/>}/>
          <Route path='/Avenger_Infinity_War' element={<Avenger_Infinity_War_Page/>}/>
          <Route path='/Bahubali' element={<Bahubali_Page/>}/>
          <Route path='/Da_5_Bloods' element={<Da_5_Bloods_page/>}/>
          <Route path='/Heart_Of_Stone' element={<Heart_Of_Stone_Page/>}/>
          <Route path='/Jawan' element={<Jawan_Page/>}/>
          <Route path='/Mariage_Story' element={<Mariage_Story_Page/>}/>
          <Route path='/Mario_Bros' element={<Mario_Bros_Page/>}/>
          <Route path='/MoneyBall' element={<MoneyBall_Page/>}/>
          <Route path='/Mother_Of_The_Bride' element={<Mother_Of_The_Bride_Page/>}/>
          <Route path='/PK' element={<PK_Page/>}/>
          <Route path='/RRR' element={<RRR_page/>}/>
          <Route path='/The_King' element={<The_King_Page/>}/>
          <Route path='/The_Power_Of_The_Dog' element={<The_Power_Of_The_Dog_Page/>}/>
          <Route path='/The_Woman_King' element={<The_Woman_King_Page/>}/>
          <Route path='/The_Wonder' element={<The_Wonder_page/>}/>
          <Route path='/To_Leslie' element={<To_Leslie_Page/>}/>


          {/* header slider link */}
          <Route path='/All_Web_Series' element={<All_Web_Series_page/>}/>
          <Route path='/All_Movies' element={<All_Movies_Page/>}/>
          <Route path='/All_Tranding' element={<All_Tranding_Page/>}/>




          {/* login and sign page */}
          <Route path='/' element={<Log_Sign_Page/>}/>


          <Route path='/Profile' element={<User_Profile_Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


