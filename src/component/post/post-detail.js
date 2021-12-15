export function PostDetail({data}){
    return(
        <div className="container">
            {data.map((data)=>{
                return(
                <div key={data.id}>
                    <div className="mt-2">
                        <h1 className='font-2 font-md'>Title :{data.title}</h1>
                        <p className="text-gray">Author :{data.author}</p>
                        <p className="text-gray">Upload On:{data.date}</p>
                    </div>
                    <div>
                        <div className="mt-1">
                            <img src={data.image} alt="crypto-details hub"/>
                        </div>
                        <div>
                            <p style={{textAlign:'justify'}}>{data.content}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}