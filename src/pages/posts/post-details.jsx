import { Footer } from "../../component/footer/footer";
import NavBar from "../../component/navigation/navigation"
import { PostDetail } from "../../component/post/post-detail"
import Comments from "../comments/comments";
import { Data1 } from "./dummy-data";

const PostDetails =()=>{
    return(
        <div>
            <NavBar/>
            <PostDetail data={Data1}/>
            <Comments/>
            <Footer/>
        </div>
    )
}
export default PostDetails;