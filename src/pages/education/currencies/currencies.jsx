import Cryptocurrency from "../../../component/education/Cryptocurrency/cryptocurrency"
import { Footer } from "../../../component/footer/footer"
import { EducationNavBar } from "../../../component/navigation/navigation"

const CurrenciesPosts =()=>{
    return(
        <div>
            <EducationNavBar/>
            <Cryptocurrency/>
            <Footer/>
        </div>
    )
}
export default CurrenciesPosts;