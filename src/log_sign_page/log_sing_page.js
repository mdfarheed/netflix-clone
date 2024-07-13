import Asked_Question from "../log_sign/asked_question";
import Footer_Netflix from "../log_sign/footer_netflex";
import Log_Sign from "../log_sign/log_sign";
import Video_Heading from "../log_sign/video_heading";

const Log_Sign_Page=()=>{
    return(
        <>
        {<Log_Sign/>}
        {<Video_Heading/>}
        {<Asked_Question/>}
        {<Footer_Netflix/>}
        </>
    )
}
export default Log_Sign_Page;