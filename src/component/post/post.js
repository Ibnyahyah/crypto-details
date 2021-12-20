export default function Post({data}){

    return(
        <div className="container">
            <div className="row mt-3 gap-1" >
                {data.map((data)=>(
                    <div className="col-6-sm col-4-md col-4-lg" key={data._id}>
                        <a href={`/post-detail/${data._id}`}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={data.image} alt="Crypto-detais hub"/>
                                </div>
                                <div className="card-title">{data.title}</div>
                                <div className="card-body content text">{data.content}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}