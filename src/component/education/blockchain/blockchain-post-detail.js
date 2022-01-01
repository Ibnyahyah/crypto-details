export function BlockchainPostDetail({data}){
    return(
        <div className="container" >
            <div>
                <h1 className='font-4 font-xl text-center mt-1  title-header'>{data.title}</h1>
                <div className="mt-1" style={{width:'100%',height:'250px'}}>
                    <img src={data.image} alt="crypto-details hub" style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:'10px'}}/>
                </div>
                <div>
                    <div>
                        <p style={{textAlign:'justify', marginBottom:'10px',marginTop:'10px'}}>{data.content}</p>
                        <h3 className="font-xl">{data.Header}</h3>
                        <p style={{textAlign:'left', marginBottom:'10px'}}>{data.subContent}</p>
                        <h3 className="font-xl">{data.Header2}</h3>
                        <p style={{textAlign:'left', marginBottom:'10px'}}>{data.subContent2}</p>
                        <h3 className="font-xl">{data.Header3}</h3>
                        <p style={{textAlign:'left', marginBottom:'10px'}}>{data.subContent3}</p>
                        <h3 className="font-xl">{data.Header4}</h3>
                        <p style={{textAlign:'left', marginBottom:'10px'}}>{data.subContent4}</p>
                        {data.refference ? <ul style={{listStyle:'decimal'}}>
                            <li style={{textAlign:'left'}}>{data.refference}</li>
                            <li style={{textAlign:'left'}}>{data.refference2}</li>
                            <li style={{textAlign:'left'}}>{data.refference3}</li>
                            <li style={{textAlign:'left'}}>{data.refference4}</li>
                        </ul>:null}
                    <p className="text-gray" style={{float:'right'}}>Upload On: {new Date(data.createdAt).toDateString()}</p>
                        <p className="text-gray">Author: {data.author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}