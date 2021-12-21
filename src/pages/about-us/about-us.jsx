import { AboutUs } from "../../component/about-us/about-us"
import { Footer } from "../../component/footer/footer"
import NavBar from "../../component/navigation/navigation"

const Aboutus =()=> {
    return(
        <>
            <NavBar/>
            <div className="container mt-5" style={{minHeight:'70vh'}}>
                <AboutUs/>
            </div>
            <Footer/>
        </>
    )
}
export default Aboutus;