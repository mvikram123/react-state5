import React,{useState} from "react";
import Child from "./Child";




const Parent=()=>{
    let[isLoggedIn,setIsLoggedIn]=useState(false)
   



  


    return(
        <div>
            <h1>Parent Component</h1>
            {
            isLoggedIn===true&&<p>You are logged in !</p>}

         
            <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Child>
        </div>
    )
}
export default Parent;