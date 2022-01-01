import NavBar from "../../component/navigation/navigation";
import { Footer } from '../../component/footer/footer'
import { Donation } from "../../component/donation/donation";

const Donations = ()=>{
    return(
        <div>
            <NavBar/>
            <div className="container align-center">
                <div className="row align-center" style={{minHeight:'60vh'}} >
                    <div className="col-6-sm">
                        <h1>Your Donation To Help us Grow</h1>
                        <p>If you can also help Us in another way, you can contact us on through our <a href="/feedback" className="text-blue">FeedBack</a> Page or Throught <a href="mailto:cryptographerhub@gmail.com" className="text-blue">Email</a></p>
                    </div>
                    <div className="col-6-sm">
                        <div className="card" style={{width:'100%'}}>
                            <Donation/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Donations;