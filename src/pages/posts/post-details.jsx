import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router';
import { Footer } from "../../component/footer/footer";
import NavBar from "../../component/navigation/navigation"
import { PostDetail } from "../../component/post/post-detail"
import Comments from "../comments/comments";

const PostDetails =()=>{

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(()=>{
        const fetchPost = async() =>{
            const res = await axios.get("https://details-server.herokuapp.com/api/v1/post/" + path);
            var data = Array.from([res.data])
            setPost(data)
            setloading(false)
        }
        fetchPost();
    },[path])

    if(loading){
        return(<div className="display-f align-center justify-center" style={{height:'90vh'}}>Loading data</div>)
    }

    return(
        <div>
            <NavBar/>
            {post.map((data)=>{
                return(
                <PostDetail data={data} key={data._id}/>
            )})}
            <Comments/>
            <Footer/>
        </div>
    )
}
export default PostDetails;