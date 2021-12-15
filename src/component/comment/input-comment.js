export default function InputComment(){
    return(
        <div className="card comment">
            <form>
                <div>
                    <input type='text' placeholder="Enter Your Name (Optional)"/>
                </div>
                <textarea cols="60" rows="10" placeholder="Type Your Comment"></textarea>
                <button>Comment</button>
            </form>
        </div>
    )
}