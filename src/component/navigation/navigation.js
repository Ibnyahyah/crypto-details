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
                <Link to="/" className="site-title"><img src="/Cryptographerhub(1).png" style={{width:'80px'}} alt="Cryptographerhub Logo"/></Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                <ul className={this.state.clicked ? "item active" : "item row"}>
                    <li className='m-1'><Link to="/">Home</Link></li>
                    <li className='m-1'><Link to="/education">Education</Link></li>
                    <li className='m-1'><Link to="/about-us">About us</Link></li>
                    <li className='m-1'><Link to="/donation">Donate</Link></li>
                    <li className='m-1'><Link to="/feedback">Feedback</Link></li>
                </ul>
            </nav>
        </div>
    )
}}

export default NavBar;

export class EducationNavBar extends React.Component{
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
                    <Link to="/" className="site-title"><img src="/Cryptographerhub(1).png" style={{width:'80px'}} alt="Cryptographerhub Logo"/></Link>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                        </div>
                    <ul className={this.state.clicked ? "item active" : "item row"}>
                        <li className='m-1'><Link to="/education">Home</Link></li>
                        <li className='m-1'><Link to="/blockchain">Blockchain</Link></li>
                        <li className='m-1'><Link to="/programming">Programming</Link></li>
                        <li className='m-1'><Link to="/cryptocurrency">Cryptocurrency</Link></li>
                        <li className='m-1'><Link to="/donation">Donate</Link></li>
                        <li className='m-1'><Link to="/feedback">Feedback</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }}