import { Link } from "react-router-dom";

export default function Post({data}){

    function PostHandler(e){
        console.log(e.target);
    }

    return(
        <div className="container">
            <div className="row mt-3 gap-1" >
                {data.map((data)=>(
                    <div className="col-6-sm col-4-md col-4-lg" key={data.id}>
                        <Link to="/post-detail">
                            <div className="card" onClick={PostHandler}>
                                <div className="card-image">
                                    <img src={data.image} alt="Crypto-detais hub"/>
                                </div>
                                <div className="card-title">{data.title}</div>
                                <div className="card-body">{data.content}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}