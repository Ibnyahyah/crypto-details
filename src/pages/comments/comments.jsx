import { CommentContent } from "../../component/comment/comment-content";
import InputComment from "../../component/comment/input-comment";
import { Data } from "./dummy-data";

const Comments = ()=>{
    return(
        <div className="container">
        <div className="row mt-4 gap-2">
            <div className="col-6-sm col-5-md col-5-lg">
                <div className="mb-2">
                    <div className="line"/>
                    <h1 className="font-xl">Comment</h1>
                    <div className="line"/>
                </div>
                <InputComment/>
            </div>
            <div className="col-6-sm col-7-md col-7-lg">
                <div className="" style={{width:'100%'}}>
                    <CommentContent data={Data}/>
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default Comments;