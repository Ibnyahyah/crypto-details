import InputComment from "../../component/comment/input-comment"

const Comments = ()=>{
    return(
        <div className="container">
        <div className="row">
            <div className="col-6-sm col-5-md col-5-lg">
                <div className="mt-4 mb-2">
                    <div className="line"/>
                    <h1 className="font-xl">Comment</h1>
                    <div className="line"/>
                </div>
                <InputComment/>
            </div>
            <div className="col-6-sm col-7-md col-7-lg">
                <p>Commments</p>
            </div>
        </div>
        
        </div>
    )
}
export default Comments;