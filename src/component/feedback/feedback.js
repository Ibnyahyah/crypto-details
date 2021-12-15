import { AboutUs } from "../about-us/about-us";
import { TermsConditon } from "../terms-conditon/terms-condition";

export default function FeedBacks(){
    return(
        <div className="container">
            <div className="row mt-2 gap-1">
                <div className="col-6-sm col-6-md">
                    <div className="card feedback">
                        <div>
                            <h1 className="mt-2 mb-1">FeedBack</h1>
                            <p className="mt-1 mb-1">Send us a feedback here.</p>
                        </div>
                        <form>
                            <div>
                                <input type="text" placeholder="Enter Your Full Name"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter Your Full Name"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Subject Title"/>
                            </div>
                            <>
                                <textarea cols="70" rows="10" placeholder="Message content"></textarea>
                            </>
                            <div><button className="btn-outlined-black" style={{float:'right'}}>Submit</button></div>
                            <p className="text-gray">We response as soon as Possible</p>
                        </form>
                    </div>
                </div>
                <div className="col-6-sm col-6-md">
                    <div className="card">
                        <div>
                           <AboutUs/>
                        </div>
                        <div>
                            <TermsConditon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}