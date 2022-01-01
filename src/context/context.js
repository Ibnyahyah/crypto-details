// import { createContext, useEffect } from "react";
// import Cookies from 'universal-cookie';
// // import {strict} from 'assert';

// export const CookieContext = createContext()

// export const ContextProvider = ({children}) =>{
//     const user = Math.random(1000)
    
//     useEffect(()=>{
//         const cookies = new Cookies();
//         cookies.set("name","user",{sameSite:"strict", path:"/",secure:true, expires: new Date(new Date().getTime() + 5 * 100000)})
//     },[user])
//     return(
//         <CookieContext.Provider value="user">
//             {children}
//         </CookieContext.Provider>
//     )
// }