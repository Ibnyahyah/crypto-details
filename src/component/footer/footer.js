import axios from 'axios';
import { useRef, useState } from 'react';

export function Footer(){

    const mailRef = useRef();
    const [text, setText] = useState();

    const Handlesubmit = async(e) =>{
        e.preventDefault();
        const Data = {
            mail : mailRef.current.value
        }
        try{
            const res = await axios.post("https://cryptomyadmin-default-rtdb.firebaseio.com/docs.json", Data);
             console.log(res);
             setText('Succesful! Thank You!!!');
             mailRef.current.value ="";
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="bg-black p-1 mt-3">
            <footer className="container bg-white p-1">
                <div className="row gap-1">
                    <div className="col-6-sm col-4-md col-4-lg">
                        <h1><img src="/Cryptographerhub(2).png" style={{width:'80px'}} alt="Cryptographerhub Logo"/></h1>
                        <p>Cryptographerhub provides adequate details about crypto-currencies, either COINs, TOKENs or NFTs.</p>
                    </div>
                    <div className="col-6-sm col-3-md col-3-lg">
                        <ul>
                            <li className="font-3 font-lg">Quick Link</li>
                            <li><a href="/education">Education</a></li>
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/donation">Donate</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                            <li><a href="/terms-and-condition">Terms and Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-6-sm col-4-md col-4-lg">
                        <h3>NewsLetter</h3>
                        <p>Subscribe For Update</p>
                        <form className="display-f bg-gray footer-form" onSubmit={Handlesubmit}>
                            <div>
                                <input type="email" className="p-1" style={{border:'none', background:'none', width:'100%',outline:'none'}} placeholder="Enter Your Email Address" ref={mailRef} required/>
                            </div>
                            <button className="btn-black p-1 text-white">Subscribe</button>
                        </form>
                            <p className="text-secondary font-4">{text}</p>
                    </div>
                </div>
                <div className="mt-1 mb-1">
                    <hr/>
                    <p className="mt-1">&copy;CopyRight {new Date().getFullYear()} || Cryptographerhub</p>
                </div>
            </footer>
        </div>
    )
}
