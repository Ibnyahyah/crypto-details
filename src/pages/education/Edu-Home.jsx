// import axios from "axios";
// import { useEffect } from "react";
import { Footer } from "../../component/footer/footer";
import { EducationNavBar } from "../../component/navigation/navigation";
import { AnouncementData, Data } from "./dummy-data";

function TopSection(){
    // useEffect(()=>{
    //     const Fecth= async()=>{
    //         const qs =`?start=1&1limit=5000&convert=USD`
    //         try{
    //             const res = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/price-performance-stats/latest/"+qs,{
    //                 headers:{"X-CMC_PRO_API_KEY":process.env.KEY_CMC}
    //             });
    //             console.log(res)
    //         }catch{

    //         }

    //     }
    //     Fecth();
    // })
    return(
        <div className="bg-black text-white pt-5 pb-5">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12-sm col-6-md">
                        <h3 className="text-gray-light-2">Welcome To</h3>
                        <h1 className="font-xxl">Cryptographer <br/> Education Hub</h1>
                        <p>Education Center POWERED BY : Cryptographer</p>
                        <p>kindly make some donation for us <a href="/donation" className="text-gray-light-1">Dontate</a></p>
                        <h3 className="mt-1">Follow Us On Our </h3>
                    </div>
                    <div className="col-12-sm">

                    </div>
                </div>
            </div>
        </div>
    )
}

function ClassRoom(){
    return(
        <div className="container pt-5 pb-5">
            <h1 className="text-white">Education Room</h1>
            <div className="row gap-1">
                {Data.map(({image,content,title,url},index)=>{
                    return(
                        <div className="col-4-sm" key={index}>
                            <a href={url}>
                                <div className="card bg-white">
                                    <div className="card-img">
                                        <img src={image} alt=""/>
                                    </div>
                                    <div className="card-body">{content}</div>
                                    <div className="card-title">{title}</div>
                                </div>  
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Annoucement(){
    return(
        <div className="bg-white pt-3 pb-3">
            <div className="container">
                <h1 className="text-center mt-2 mb-2">Announcement</h1>
                <div className="row gap-1">
                    {AnouncementData.map(({content,date,title},index)=>{
                        return(
                            <div className="col-4-sm" key={index}>
                                <div className="card bg-gray-light-9">
                                    <div className="text-gray">{date}</div>
                                    <div className="card-title">{title}</div>
                                    <div className="card-body">{content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const EducationHome =()=>(
    <div className="bg-black pb-3">
        <EducationNavBar/>
        <>
            <TopSection/>
            <ClassRoom/>
            <Annoucement/>
        </>
        <Footer/>
    </div>
)
export default EducationHome;