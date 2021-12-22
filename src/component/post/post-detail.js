export function PostDetail({data}){
    return(
        <div className="container" >
                <div>
                    <h1 className='font-2 font-md'>Name : {data.title}</h1>
                    <div className="mt-1 mb-1" style={{width:'100%',height:'250px'}}>
                        <img src={data.image} alt="crypto-details hub" style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:'10px'}}/>
                    </div>
                    <div className="mt-2">
                        <p className="text-black">Website: <a href={`https://${data.website}`} className="text-blue" target="_blank" rel="noreferrer">{data.website}</a></p>
                        <p className="text-black">Supply: {data.supply}</p>
                        <p className="text-gray">Contract: <a href={`https://www.google.com/search?q=${data.contract}`} target="_blank" rel="noreferrer">{data.contract}</a></p>
                        <p className="text-gray">Chain-network: {data.chain}</p>
                    </div>
                    <div>
                        <div>
                            <p style={{textAlign:'justify'}}>{data.content}</p>
                        <p className="text-gray" style={{float:'right'}}>Upload On: {new Date(data.createdAt).toDateString()}</p>
                            <p className="text-gray">Author: {data.author}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}