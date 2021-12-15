import FeedBacks from "../../component/feedback/feedback";
import { Footer } from "../../component/footer/footer";
import NavBar from "../../component/navigation/navigation";

const FeedBack = () => {
    return(
        <>
            <NavBar/>
            <div style={{minHeight:'90vh'}}>
                <FeedBacks/>
            </div>
            <Footer/>
        </>
    )
}
export default FeedBack;