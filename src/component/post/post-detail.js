export function PostDetail({data}){
    return(
        <div className="container" >
                <div>
                    <div className="mt-2">
                        <h1 className='font-2 font-md'>Name : {data.title}</h1>
                        <p className="text-gray">Author : {data.author}</p>
                        <p className="text-black">Website : <a href={`https://${data.website}`} className="text-blue" target="_blank" rel="noreferrer">{data.website}</a></p>
                        <p className="text-black">Supply : {data.supply}</p>
                        <p className="text-gray">Chain-network : {data.chain}</p>
                        <p className="text-gray">Contract : <a href={`https://www.google.com/search?q=${data.contract}`} target="_blank" rel="noreferrer">{data.contract}</a></p>
                        <p className="text-gray" style={{float:'right'}}>Upload On: {new Date(data.createdAt).toDateString()}</p>
                    </div>
                    <div>
                        <div className="mt-2 mb-2" style={{width:'100%',height:'250px'}}>
                            <img src={data.image} alt="crypto-details hub" style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:'10px'}}/>
                        </div>
                        <div>
                            <p style={{textAlign:'justify'}}>{data.content}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}