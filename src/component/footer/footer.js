import { Link } from "react-router-dom";

export function Footer(){
    return(
        <div className="bg-black p-1 mt-3">
            <footer className="container bg-white p-1">
                <div className="row gap-1">
                    <div className="col-6-sm col-4-md col-4-lg">
                        <h1><img src="/crypto_details_hub.png" style={{width:'80px'}} alt="crypto_details_hub Logo"/></h1>
                        <p>Crypto-details hub provides adequate details about crypto-currencies, either COINs, TOKENs or NFTs.</p>
                    </div>
                    <div className="col-6-sm col-3-md col-3-lg">
                        <ul>
                            <li className="font-3 font-lg">Quick Link</li>
                            <li><a href="/about-us">About us</a></li>
                            <li><Link to="/">Donate</Link></li>
                            <li><a href="/feedback">Feedback</a></li>
                            <li><a href="/terms-and-condition">Terms and Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-6-sm col-4-md col-4-lg">
                        <h3>NewsLetter</h3>
                        <p>Subscribe For Update</p>
                        <form className="display-f bg-gray footer-form">
                            <div>
                                <input type="email" className="p-1" style={{border:'none', background:'none', width:'100%',outline:'none'}} placeholder="Enter Your Email Address" required/>
                            </div>
                            <button className="btn-black p-1 text-white" style={{}}>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-1 mb-1">
                    <hr/>
                    <p className="mt-1">&copy;CopyRight {new Date().getFullYear()} || Crypto-details hub</p>
                </div>
            </footer>
        </div>
    )
}
