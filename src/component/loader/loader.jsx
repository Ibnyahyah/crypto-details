import NavBar from '../navigation/navigation';

export function Loader(){
    return(
        <>
        <NavBar/>
            <div className="container">
                <div className="row mt-3 display-f justify-center align-center" style={{height:'50vh'}}>
                    loading...
                </div>
            </div>
        </>
    )
}
