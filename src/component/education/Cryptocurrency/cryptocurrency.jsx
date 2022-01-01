import { Link } from "react-router-dom";

export default function Cryptocurrency(){
    return(
        <div className="container display-f align-center" style={{height:'70vh'}}>
            <div>
                <p>Nothing Here</p>
                <h2 className="font-xxl">Coming Soon</h2>
                <Link to="/education" className="text-blue">Go to Home</Link>
            </div>
        </div>
    )
}