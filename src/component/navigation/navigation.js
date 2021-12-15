import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
state = {
    clicked: false
}
handleClick = ()=>{
    this.setState({clicked : !this.state.clicked})
}
render(){
    return(
        <div className='navbar navbar-white'>
            <nav className="navbar navbar-black text-white container">
                <header className="site-title">Logo</header>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                <ul className={this.state.clicked ? "item active" : "item row"}>
                    <li className='m-1'><Link to="/">Home</Link></li>
                    <li className='m-1'><Link to="/about-us">About us</Link></li>
                    <li className='m-1'><Link to="/">Donate</Link></li>
                    <li className='m-1'><Link to="/feedback">Feedback</Link></li>
                </ul>
            </nav>
        </div>
    )
}}

export default NavBar