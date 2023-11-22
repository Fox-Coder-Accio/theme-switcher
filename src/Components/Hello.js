import React, {useState , useContext, useEffect} from "react";
import styleContext from "../context/styleContext";

const Hello = ()=>{
   const {style,darkMode, lightMode}  = useContext(styleContext)
   const [currentStyle, setCurrentStyle] = useState("lightMode")

    useEffect(()=>{
        let cStyle = localStorage.getItem("currentStyle") || "lightMode"

        setCurrentStyle(cStyle)
        if(cStyle==="darkMode"){
            darkMode()
        }else{
            lightMode()
        }
    },[])

    return(
        <div>

            <div style={{
                color:style.color,
                backgroundColor:style.backgroundColor,
                border:style.border
            
            }}>
                <h1>Abhishek Shankar Choudhary</h1>
                <p>I am a software Devloper</p>
                <input type="text"  />
                
            </div>
            <br/>
            {/* <button onClick={darkMode}>Switch to Dark</button>
            <button onClick={lightMode} > Switch to Light</button> */}

            <button onClick={()=>{
                 currentStyle==="lightMode" ? darkMode() : lightMode()
                 let cStyle = currentStyle==="lightMode" ? "darkMode" : "lightMode"
                 setCurrentStyle(cStyle)
                 localStorage.setItem("currentStyle", cStyle)
            }}> 
                 {
                    currentStyle==="lightMode" ? "Switch to Dark" : "Switch to Light"
                 }
            </button>

        </div>
    )
}

export default Hello