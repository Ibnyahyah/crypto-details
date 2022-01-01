import { CopyButton } from "../button/copy-button";

export function PostDetail({data}){
    return(
        <div className="container" >
                <div>
                    <div className="mt-1" style={{width:'100%',height:'250px'}}>
                        <img src={data.image} alt="crypto-details hub" style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:'10px'}}/>
                    </div>
                    <h1 className='font-2 font-md text-center'>{data.title}</h1>
                    <div className="mt-2">
                        <p className="text-black">Website: <a href={`https://${data.website}`} className="text-blue" target="_blank" rel="noreferrer">{data.website}</a></p>
                        <p className="text-black">Supply: {data.supply}</p>
                        <p className="text-gray">Chain-network: {data.chain}</p>
                        <div>
                            <p className="text-gray copied">Contract:{data.contract}</p>
                            <CopyButton value={data.contract}/>
                        </div>
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
                        <p className="text-gray" style={{float:'right'}}>Upload On: {new Date(data.createdAt).toDateString()}</p>
                            <p className="text-gray">Author: {data.author}</p>
                            {/* <p><i>Source: website,whitepapper @todo</i></p> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}