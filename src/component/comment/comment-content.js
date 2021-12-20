export function CommentContent({data}){
    return(
        <div>
            {data.map((data)=>(
                <div key={data.id}>
                    <h1  className="font-4 font-lg">{data.name}</h1>
                    <p>{data.content}</p>
                    <p className="text-gray">{data.date}</p>
                    <hr  className="m-1"/>
                </div>
            ))}
        </div>
    )
}