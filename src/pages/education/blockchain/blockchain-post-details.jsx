import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router';
import { BlockchainPostDetail } from "../../../component/education/blockchain/blockchain-post-detail";
import { Footer } from "../../../component/footer/footer";
import { Loader } from "../../../component/loader/loader";
import { EducationNavBar } from "../../../component/navigation/navigation";
import Comments from "../../comments/comments";

const BlockchainPostDetails =()=>{

    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const [post, setPost] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const fetchPost = async() =>{
            const res = await axios.get("https://details-server.herokuapp.com/api/v1/education-post/" + path);
            var data = Array.from([res.data])
            setPost(data)
            setloading(false)
        }
        fetchPost();
    },[path])

    if(loading){
        return<Loader/>
    }

    return(
        <div>
            <EducationNavBar/>
            {post.map((data)=>{
                return(
                <BlockchainPostDetail data={data} key={data._id}/>
            )})}
            <Comments/>
            <Footer/>
        </div>
    )
}
export default BlockchainPostDetails;