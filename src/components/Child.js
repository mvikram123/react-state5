import React,{useState} from "react";



const Child=({isLoggedIn,setIsLoggedIn})=>{
   
    


    return(


        <div>
            {isLoggedIn===false &&
            <div>

                  <label for="username">Username:</label>  
                  <input type="text" ></input><br /><br />

                  <label for="password">Password:</label>  

                <input type="password"></input><br /><br />
                  <button onClick={()=>setIsLoggedIn(true)}>Login</button>
                  </div>
            }
        </div>
            
    )
}
export default Child;