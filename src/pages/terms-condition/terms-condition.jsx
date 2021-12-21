import { Footer } from "../../component/footer/footer"
import NavBar from "../../component/navigation/navigation"
import { TermsConditon } from "../../component/terms-conditon/terms-condition";

const Termscondition =()=> {
    return(
        <>
            <NavBar/>
            <div className="container mt-4" style={{minHeight:'75vh'}}>
                <TermsConditon/>
            </div>
            <Footer/>
        </>
    )
}
export default Termscondition;