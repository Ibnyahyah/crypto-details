import { useEffect, useState } from "react";
import { Footer } from "../../component/footer/footer";
import { Loader } from '../../component/loader/loader';
import NavBar from "../../component/navigation/navigation";
import Post from "../../component/post/post";
import axios from "axios";

const Posts = () =>{

    const [data,setData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const fetchPost = async() =>{
           const res = await axios.get('https://details-server.herokuapp.com/api/v1/post');
           setData(res.data.sort((p1,p2)=>{
               return new Date(p2.createdAt) - new Date(p1.createdAt);
           }));
           setloading(false);
        }
        fetchPost();
    },[])
    if(loading){
        return<Loader/>
    }
    return(
        <>
            <NavBar/>
            <div style={{minHeight:'90vh'}}>
               <Post data={data}/>
            </div>
            <Footer/>
        </>
    )
}
export default Posts;