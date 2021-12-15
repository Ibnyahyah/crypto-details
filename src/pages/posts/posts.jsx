import { Footer } from "../../component/footer/footer";
import NavBar from "../../component/navigation/navigation";
import Post from "../../component/post/post";
import { Data } from "./dummy-data";

const Posts = () =>{
    return(
        <>
            <NavBar/>
            <div style={{minHeight:'90vh'}}>
               <Post data={Data}/>
               <Post data={Data}/>
               <Post data={Data}/>
            </div>
            <Footer/>
        </>
    )
}
export default Posts;